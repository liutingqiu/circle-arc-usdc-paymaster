// SPDX-License-Identifier: MIT
import { ArcGasEstimate } from '../types.js';

export class ArcGasEngine {
  /**
   * On Arc, USDC is the native gas asset (1 USDC = 1,000,000 micro-USDC).
   * Calculates the exact gas cost for an Arc mainnet transaction.
   */
  public static estimateGas(
    gasUnits: number,
    baseFeePerGasMicroUSDC = 0.02, // 0.02 micro-USDC per gas unit
    priorityFeeMicroUSDC = 0.005
  ): ArcGasEstimate {
    const effectiveFeeRate = baseFeePerGasMicroUSDC + priorityFeeMicroUSDC;
    const totalMicroUSDC = gasUnits * effectiveFeeRate;
    const totalUSDC = totalMicroUSDC / 1_000_000;

    return {
      gasUnits,
      baseFeePerGasMicroUSDC,
      priorityFeeMicroUSDC,
      totalGasCostMicroUSDC: parseFloat(totalMicroUSDC.toFixed(4)),
      totalGasCostUSDC: parseFloat(totalUSDC.toFixed(6))
    };
  }

  /**
   * Estimates gas for a standard peer-to-peer USDC transfer on Arc (21,000 gas).
   */
  public static estimateTransferGas(): ArcGasEstimate {
    return this.estimateGas(21_000);
  }

  /**
   * Estimates gas for a batch microgrant disbursement (65,000 base + 12,000 per recipient).
   */
  public static estimateBatchDisbursementGas(recipientCount: number): ArcGasEstimate {
    const gasUnits = 65_000 + recipientCount * 12_000;
    return this.estimateGas(gasUnits);
  }
}
