export interface ArcNetworkConfig {
    networkName: 'Arc Mainnet' | 'Arc Testnet';
    chainId: number;
    nativeGasToken: 'USDC';
    nativeTokenDecimals: 6;
    rpcUrl: string;
    explorerUrl: string;
}
export declare const ARC_MAINNET_CONFIG: ArcNetworkConfig;
export interface ArcGasEstimate {
    gasUnits: number;
    baseFeePerGasMicroUSDC: number;
    priorityFeeMicroUSDC: number;
    totalGasCostMicroUSDC: number;
    totalGasCostUSDC: number;
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
