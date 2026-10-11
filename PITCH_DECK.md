# Circle Arc Native USDC Gas & Batch Disburser 🔵⚡

> **Submitted to DoraHacks • Circle Arc Microgrants ($10,000 USD Prize Pool)**  
> **Target Program:** 20 Microgrants of $500 USDC each for working Arc mainnet infrastructure and experiments.  
> **Live Interactive Terminal:** [https://liutingqiu.github.io/circle-arc-usdc-paymaster/](https://liutingqiu.github.io/circle-arc-usdc-paymaster/)  
> **Open Source GitHub Repository:** [https://github.com/liutingqiu/circle-arc-usdc-paymaster](https://github.com/liutingqiu/circle-arc-usdc-paymaster)  
> **Lead Engineer & Author:** Tingqiu Liu (`@liutingqiu`, `tianqi689@gmail.com`)

---

## 🎯 Executive Summary & The Problem

Circle's **Arc mainnet** represents a paradigm shift in blockchain architecture: **USDC is the native gas asset**. Users and developers no longer need to hold or manage volatile native tokens (such as ETH or SOL) just to pay for network transactions.

However, developers building on Arc face new practical requirements:
1. **Gas Modeling in Native USDC:** Tooling and wallet integrations must calculate gas directly in micro-USDC (6 decimals) rather than Gwei (18 decimals).
2. **Micro-Payment & Batch Grant Disbursement:** Distributing prizes, grants, or creator royalties across dozens of recipients on conventional chains incurs prohibitive gas friction. On Arc, batch disbursements can be executed atomically for less than $0.01 in total network fees.

---

## 💡 The Solution: Circle Arc Native USDC Paymaster & Disburser

**Circle Arc Native USDC Paymaster** is a developer toolkit, gas estimation engine, and batch grant distribution protocol built specifically for **Circle Arc mainnet**.

### Key Architecture:

### 1. Arc Native Gas Pricing Engine
- Computes exact gas costs directly in micro-USDC ($1 \text{ USDC} = 1,000,000 \text{ micro-USDC}$).
- Standard peer-to-peer transfer (21,000 gas): costs only **$0.000525 USDC** (less than one-tenth of a cent).
- Smart contract deployments (120,000 gas): costs only **$0.003 USDC**.

### 2. $10,000 Atomic Batch Microgrant Disburser
- Enables DAOs, foundations, and hackathon organizers to disburse grants across 20+ builder addresses in a single atomic transaction.
- Disbursing 20 microgrants of $500 USDC each ($10,000 total volume) consumes only 305,000 gas units, costing **$0.007625 USDC in total gas** (<$0.01 network cost to disburse $10k).

### 3. Interactive Web Terminal & Simulator
- Deployed on **GitHub Pages** with live gas calculations, dynamic transaction archetypes, and real-time batch disbursement simulations.

---

## 🛠️ Architecture & Tech Stack

```text
circle-arc-usdc-paymaster/
├── src/
│   ├── types.ts                   # Arc network config, gas estimates, grant recipient schemas
│   ├── gas/
│   │   └── arc_gas.ts             # Native USDC gas fee calculation engine
│   ├── disburser/
│   │   └── batch.ts               # Atomic batch microgrant distribution engine
│   └── index.ts                   # Public library exports
├── tests/
│   └── arc.test.js                # 5 automated unit tests (gas math, batching, config)
├── index.html                     # Live interactive Arc gas terminal & disburser simulator
├── PITCH_DECK.md                  # Hackathon pitch deck & submission document
└── README.md                      # Developer documentation & quickstart
```

- **Runtime:** Node.js (ESM), TypeScript 5.6
- **Test Suite:** `node:test` + `node:assert/strict` (5/5 passed, 100% green)
- **Frontend:** Pure HTML5/CSS/JS (Circle Blue & Cyan aesthetic, deployed on GitHub Pages)
- **Arc Compatibility:** Arc Mainnet (Chain ID 5042), Native USDC Gas Model

---

## 🔬 Test Suite Verification

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

## 🏆 Project Deliverables & Links

- **Live Interactive Terminal:** [https://liutingqiu.github.io/circle-arc-usdc-paymaster/](https://liutingqiu.github.io/circle-arc-usdc-paymaster/)
- **GitHub Repository:** [https://github.com/liutingqiu/circle-arc-usdc-paymaster](https://github.com/liutingqiu/circle-arc-usdc-paymaster)
- **Lead Developer Contact:** Tingqiu Liu (`tianqi689@gmail.com`) / GitHub: `liutingqiu`

---
*Built with ❤️ for Circle, Arc, and the Global USDC Builder Community.*
