# Circle Arc Native USDC Gas & Batch Disburser 🔵⚡

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://img.shields.io/badge/Tests-5%2F5%20Passed-brightgreen)](tests/arc.test.js)
[![Circle Arc](https://img.shields.io/badge/Circle-Arc%20Mainnet%20%28USDC%29-blue)](https://dorahacks.io/hackathon/arc-microgrants)
[![Live Terminal](https://img.shields.io/badge/Live%20Terminal-GitHub%20Pages-success)](https://liutingqiu.github.io/circle-arc-usdc-paymaster/)

**Native USDC Gas Fee Estimator, Micro-Payment Streamer, and Batch Grant Disburser for Circle Arc Mainnet.**

Submitted to the **DoraHacks • Circle Arc Microgrants ($10,000 USD Prize Pool)**.

---

## 🌟 Overview

On Circle's **Arc mainnet**, USDC is the native gas currency. Users and applications no longer need to manage volatile tokens like ETH to transact on-chain.

**Circle Arc Native USDC Paymaster** provides the developer primitives to build native applications on Arc:
1. **Arc Native Gas Calculator:** Computes exact execution costs in micro-USDC ($1 \text{ USDC} = 1,000,000 \text{ micro-USDC}$).
2. **Sub-Cent Peer-to-Peer Transfers:** Standard transfers cost only **$0.000525 USDC** in gas.
3. **Atomic Batch Microgrant Disburser:** Disburses 20 microgrants ($10,000 total volume) in a single transaction for under **$0.01 USDC** in total network fees.
4. **Interactive Live Terminal:** Web-based simulator and developer dashboard deployed on GitHub Pages.

---

## 🌐 Live Interactive Terminal

Test the live Arc native gas fee calculator and batch disburser online:  
👉 **[https://liutingqiu.github.io/circle-arc-usdc-paymaster/](https://liutingqiu.github.io/circle-arc-usdc-paymaster/)**

---

## 📦 Quick Start & Usage

```bash
git clone https://github.com/liutingqiu/circle-arc-usdc-paymaster.git
cd circle-arc-usdc-paymaster
npm install
npm test
```

### TypeScript / ESM Example

```typescript
import { ArcGasEngine, ArcBatchDisburser, ARC_MAINNET_CONFIG } from 'circle-arc-usdc-paymaster';

// 1. Calculate native USDC gas for standard transfer
const transferGas = ArcGasEngine.estimateTransferGas();
console.log(`Gas Cost: ${transferGas.totalGasCostUSDC} USDC ($${transferGas.totalGasCostMicroUSDC} micro-USDC)`);

// 2. Disburse batch microgrants (e.g. 20 grants of $500 USDC)
const recipients = Array.from({ length: 20 }, (_, i) => ({
  recipientAddress: `0xBuilder${i}...`,
  grantAmountUSDC: 500.0,
  memo: `Arc Microgrant #${i + 1}`
}));

const result = ArcBatchDisburser.executeBatch(recipients);
console.log(`Disbursed: $${result.totalDisbursedUSDC} USDC across ${result.totalRecipients} recipients`);
console.log(`Total Gas Paid: $${result.totalGasPaidUSDC} USDC | Tx Hash: ${result.txHash}`);
```

---

## 🧪 Automated Test Suite

Run the unit tests covering native USDC gas calculations, recipient scaling, batch disbursements, and network configuration:

```bash
node --test tests/arc.test.js
```

Output:
```text
✔ 1. ArcGasEngine computes native USDC gas for peer-to-peer transfer (0.6ms)
✔ 2. ArcGasEngine scales batch disbursement gas with recipient count (0.2ms)
✔ 3. ArcBatchDisburser executes 20 microgrants totaling 10,000 USDC (0.2ms)
✔ 4. ArcBatchDisburser throws error on empty recipient array (0.3ms)
✔ 5. ARC_MAINNET_CONFIG verifies USDC as native gas currency (0.1ms)

ℹ pass 5
ℹ fail 0
```

---

## 📖 Hackathon Documentation

Read the full project pitch deck, architectural rationale, and Arc deployment specifications:  
👉 **[PITCH_DECK.md](PITCH_DECK.md)**

---

## 📄 License

Released under the [MIT License](LICENSE).
