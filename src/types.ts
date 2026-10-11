// SPDX-License-Identifier: MIT

export interface ArcNetworkConfig {
  networkName: 'Arc Mainnet' | 'Arc Testnet';
  chainId: number;
  nativeGasToken: 'USDC';
  nativeTokenDecimals: 6;
  rpcUrl: string;
  explorerUrl: string;
}

export const ARC_MAINNET_CONFIG: ArcNetworkConfig = {
  networkName: 'Arc Mainnet',
  chainId: 5042,
  nativeGasToken: 'USDC',
  nativeTokenDecimals: 6,
  rpcUrl: 'https://rpc.arc.circle.com',
  explorerUrl: 'https://explorer.arc.circle.com'
};

export interface ArcGasEstimate {
  gasUnits: number;
  baseFeePerGasMicroUSDC: number; // in micro-USDC (1e-6 USDC)
  priorityFeeMicroUSDC: number;
  totalGasCostMicroUSDC: number;
  totalGasCostUSDC: number;       // total gas in standard USDC
}

export interface GrantRecipient {
  recipientAddress: string;
  grantAmountUSDC: number;
  memo: string;
}

export interface BatchDisbursementResult {
  batchId: string;
  totalRecipients: number;
  totalDisbursedUSDC: number;
  totalGasPaidUSDC: number;
  txHash: string;
  timestamp: number;
  status: 'CONFIRMED';
}
