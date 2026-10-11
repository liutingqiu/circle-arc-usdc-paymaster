import { GrantRecipient, BatchDisbursementResult } from '../types.js';
export declare class ArcBatchDisburser {
    /**
     * Disburses microgrants in atomic batches on Arc mainnet.
     * Calculates total USDC transferred and native gas paid directly in USDC.
     */
    static executeBatch(recipients: GrantRecipient[]): BatchDisbursementResult;
}
