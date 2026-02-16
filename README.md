# Spraay — Batch Crypto Payments on Kite AI

Send KITE or ERC-20 tokens to **200+ recipients** in a single transaction on the first AI payment blockchain.

🌐 **[spraay.app](https://spraay.app)** · 📄 **[Verified on KiteScan](https://testnet.kitescan.ai/address/0x08fA5D1c16CD6E2a16FC0E4839f262429959E073#code)**

---

## What is Spraay?

Spraay is a multi-chain batch payment protocol. This deployment brings batch payments to **Kite AI** (Chain ID: 2368), the first AI payment blockchain built on Avalanche.

**Contract (Testnet):** `0x08fA5D1c16CD6E2a16FC0E4839f262429959E073`
**Chain:** KiteAI Testnet (Chain ID: 2368)
**Protocol Fee:** 0.3%
**Max Recipients:** 200 per transaction

## Why Kite AI?

- 🤖 **AI-native** — purpose-built L1 for autonomous agent payments
- ⚡ **Near-zero gas fees** — <$0.000001 per transaction
- 🪪 **Agent identity** — cryptographic identity for AI models and agents
- 🔐 **Verified** — source code publicly verified on KiteScan

## Features

- ⚡ **Batch native token sends** — equal or variable amounts
- 🪙 **Batch ERC-20 sends** — USDT, USDC, or any token on Kite
- 📋 **CSV import** — bulk upload addresses and amounts
- 🤖 **AI Agent ready** — designed for autonomous agent batch payouts
- 🔐 **Secure** — OpenZeppelin ReentrancyGuard & Pausable

## Smart Contract

| Function | Description |
|----------|-------------|
| `sprayETH(recipients[], amounts[])` | Batch send native token (payable) |
| `sprayToken(token, recipients[], amounts[])` | Batch send ERC-20 tokens |
| `sprayEqual(token, recipients[], amount)` | Equal amount to all recipients |

All functions accept variable amounts per recipient. Protocol fee (0.3%) is applied automatically.

## Spraay Multi-Chain Deployments

| Chain | Contract | Status |
|-------|----------|--------|
| **Base** | `0x1646452F98E36A3c9Cfc3eDD8868221E207B5eEC` | ✅ Mainnet |
| **Unichain** | `0x08fA5D1c16CD6E2a16FC0E4839f262429959E073` | ✅ Mainnet |
| **Plasma** | See [Spraay Plasma](https://spraay.app/plasma) | ✅ Mainnet |
| **Bittensor** | Python CLI/API | ✅ Mainnet |
| **Kite AI** | `0x08fA5D1c16CD6E2a16FC0E4839f262429959E073` | 🧪 Testnet |

## Development

```bash
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network kiteTestnet
npx hardhat verify --network kiteTestnet <CONTRACT_ADDRESS> <FEE_RECIPIENT> 30
```

## Links

- 🌐 Website: [spraay.app](https://spraay.app)
- 🪁 Kite AI: [gokite.ai](https://gokite.ai)
- 🐦 Twitter: [@Spraay_app](https://twitter.com/Spraay_app)
- 💜 Farcaster: [@plag](https://warpcast.com/plag)
- 💻 GitHub: [plagtech](https://github.com/plagtech)
