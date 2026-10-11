// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { ArcGasEngine, ArcBatchDisburser, ARC_MAINNET_CONFIG } from '../dist/index.js';

test('1. ArcGasEngine computes native USDC gas for peer-to-peer transfer', () => {
  const estimate = ArcGasEngine.estimateTransferGas();

  assert.equal(estimate.gasUnits, 21_000);
  assert.equal(estimate.totalGasCostMicroUSDC, 525.0); // 21,000 * 0.025 micro-USDC
  assert.equal(estimate.totalGasCostUSDC, 0.000525);    // Less than a tenth of a cent!
});

test('2. ArcGasEngine scales batch disbursement gas with recipient count', () => {
  const single = ArcGasEngine.estimateBatchDisbursementGas(1);
  const tenRecipients = ArcGasEngine.estimateBatchDisbursementGas(10);
  const twentyRecipients = ArcGasEngine.estimateBatchDisbursementGas(20);

  assert.ok(tenRecipients.gasUnits > single.gasUnits);
  assert.ok(twentyRecipients.gasUnits > tenRecipients.gasUnits);
  assert.equal(twentyRecipients.gasUnits, 65_000 + 20 * 12_000); // 305,000 gas units
  assert.equal(twentyRecipients.totalGasCostUSDC, 0.007625);      // Under $0.01 to disburse 20 grants!
});

test('3. ArcBatchDisburser executes 20 microgrants totaling 10,000 USDC', () => {
  const recipients = Array.from({ length: 20 }, (_, i) => ({
    recipientAddress: `0x71bb39189434e9dca9530c14f1959945ff${i.toString(16).padStart(2, '0')}`,
    grantAmountUSDC: 500.0,
    memo: `Arc Microgrant Winner #${i + 1}`
  }));

  const result = ArcBatchDisburser.executeBatch(recipients);

  assert.equal(result.totalRecipients, 20);
  assert.equal(result.totalDisbursedUSDC, 10_000.0);
  assert.equal(result.status, 'CONFIRMED');
  assert.ok(result.txHash.startsWith('0xarc_'));
  assert.ok(result.totalGasPaidUSDC < 0.01, 'Gas to disburse $10k must be less than 1 cent');
});

test('4. ArcBatchDisburser throws error on empty recipient array', () => {
  assert.throws(() => {
    ArcBatchDisburser.executeBatch([]);
  }, /Recipient list cannot be empty/);
});

test('5. ARC_MAINNET_CONFIG verifies USDC as native gas currency', () => {
  assert.equal(ARC_MAINNET_CONFIG.networkName, 'Arc Mainnet');
  assert.equal(ARC_MAINNET_CONFIG.nativeGasToken, 'USDC');
  assert.equal(ARC_MAINNET_CONFIG.nativeTokenDecimals, 6);
  assert.equal(ARC_MAINNET_CONFIG.chainId, 5042);
});
