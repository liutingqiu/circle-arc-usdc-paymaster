import { ArcGasEstimate } from '../types.js';
export declare class ArcGasEngine {
    /**
     * On Arc, USDC is the native gas asset (1 USDC = 1,000,000 micro-USDC).
     * Calculates the exact gas cost for an Arc mainnet transaction.
     */
    static estimateGas(gasUnits: number, baseFeePerGasMicroUSDC?: number, // 0.02 micro-USDC per gas unit
    priorityFeeMicroUSDC?: number): ArcGasEstimate;
    /**
     * Estimates gas for a standard peer-to-peer USDC transfer on Arc (21,000 gas).
     */
    static estimateTransferGas(): ArcGasEstimate;
    /**
     * Estimates gas for a batch microgrant disbursement (65,000 base + 12,000 per recipient).
     */
    static estimateBatchDisbursementGas(recipientCount: number): ArcGasEstimate;
}
