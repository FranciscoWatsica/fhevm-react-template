# Universal FHEVM SDK - Privacy-Preserving dApp Development Made Simple

🏆 **Zama FHEVM SDK Bounty Submission**

A framework-agnostic TypeScript SDK that makes building privacy-preserving decentralized applications with Fully Homomorphic Encryption (FHE) as simple as using any other web3 library.

---

## 🎯 What is This?

The **Universal FHEVM SDK** (`@fhevm-pet-dna/sdk`) is a comprehensive development toolkit that wraps all FHEVM complexity into a clean, wagmi-like API. It provides:

- ✅ **Framework-Agnostic Core**: Works with React, Vue, Node.js, or vanilla JavaScript
- ✅ **React Hooks**: Drop-in hooks for easy React integration
- ✅ **Vue 3 Composables**: First-class Vue Composition API support
- ✅ **Complete Abstraction**: Handles fhevmjs, ethers, EIP-712, Gateway API v2.0+
- ✅ **Type-Safe**: Full TypeScript definitions throughout
- ✅ **Production-Ready**: Error handling, loading states, retry logic
- ✅ **Well-Documented**: 2,000+ lines of comprehensive documentation

**SDK is the PRIMARY deliverable. The Pet DNA Matching dApp is an example demonstrating SDK capabilities.**

---

## 🚀 Quick Links

- **📦 SDK Package**: [`packages/fhevm-sdk/`](./packages/fhevm-sdk/)
- **📚 SDK Documentation**: [SDK README](./packages/fhevm-sdk/README.md)
- **📖 Technical Docs**: [SDK_DOCUMENTATION.md](./SDK_DOCUMENTATION.md)
- **🎥 Video **: demo1.mp4 demo2.mp4 demo3.mp4
- **🏅 Bounty Submission**: [BOUNTY_SUBMISSION.md](./BOUNTY_SUBMISSION.md)
- **🌐 Live Demo**: [https://franciscowatsica.github.io/FHEPetDNAMatching/](https://franciscowatsica.github.io/FHEPetDNAMatching/)
- **📜 GitHub Repo**: [https://github.com/FranciscoWatsica/fhevm-react-template](https://github.com/FranciscoWatsica/fhevm-react-template)
- **📝 Smart Contract**: [0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1](https://sepolia.etherscan.io/address/0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1) (Verified on Sepolia)

---

## 📦 Project Structure

```
fhevm-react-template/
├── packages/
│   ├── fhevm-sdk/              # ⭐ Universal FHEVM SDK (PRIMARY DELIVERABLE)
│   │   ├── src/
│   │   │   ├── core/           # Framework-agnostic client
│   │   │   │   ├── FHEVMClient.ts        (250+ lines)
│   │   │   │   └── ContractHelpers.ts    (150+ lines)
│   │   │   ├── react/          # React hooks
│   │   │   │   ├── useFHEVM.ts
│   │   │   │   ├── useEncrypt.ts
│   │   │   │   ├── useDecrypt.ts
│   │   │   │   ├── useFHEVMContract.ts
│   │   │   │   └── FHEVMContext.tsx
│   │   │   ├── vue/            # Vue 3 composables
│   │   │   │   ├── useFHEVM.ts
│   │   │   │   ├── useEncrypt.ts
│   │   │   │   ├── useDecrypt.ts
│   │   │   │   └── useFHEVMContract.ts
│   │   │   └── utils/          # Utilities & types
│   │   │       ├── types.ts
│   │   │       └── helpers.ts
│   │   ├── package.json        # NPM package config
│   │   ├── tsconfig.json
│   │   └── README.md           # Complete SDK documentation
│   │
│   └── contracts/              # Smart contracts
│       ├── contracts/
│       │   └── PetDNAMatching.sol
│       ├── scripts/
│       │   └── deploy.ts
│       └── hardhat.config.ts
│
├── templates/                  # Framework templates
│   └── README.md               # Templates documentation
│
├── examples/
│   └── nextjs/                 # Next.js example (demonstrates SDK)
│       ├── app/
│       │   ├── page.tsx        # Main demo page
│       │   ├── layout.tsx      # Root layout with FHEProvider
│       │   ├── globals.css     # Global styles
│       │   └── api/            # API routes
│       │       ├── fhe/
│       │       │   ├── route.ts
│       │       │   ├── encrypt/route.ts
│       │       │   ├── decrypt/route.ts
│       │       │   └── compute/route.ts
│       │       └── keys/route.ts
│       ├── components/
│       │   ├── ui/             # Base UI components
│       │   │   ├── Button.tsx
│       │   │   ├── Input.tsx
│       │   │   └── Card.tsx
│       │   ├── fhe/            # FHE components
│       │   │   ├── FHEProvider.tsx
│       │   │   ├── EncryptionDemo.tsx
│       │   │   ├── ComputationDemo.tsx
│       │   │   └── KeyManager.tsx
│       │   └── examples/       # Example use cases
│       │       ├── BankingExample.tsx
│       │       └── MedicalExample.tsx
│       ├── lib/
│       │   ├── fhe/            # FHE utilities
│       │   │   ├── client.ts
│       │   │   ├── server.ts
│       │   │   ├── keys.ts
│       │   │   └── types.ts
│       │   └── utils/          # Helper utilities
│       │       ├── security.ts
│       │       └── validation.ts
│       ├── hooks/              # Custom React hooks
│       │   ├── useFHE.ts
│       │   ├── useEncryption.ts
│       │   └── useComputation.ts
│       ├── types/              # TypeScript types
│       │   ├── fhe.ts
│       │   └── api.ts
│       └── package.json
│
├── docs/                       # Documentation
│   └── README.md               # Documentation index
│
├── public/                     # Standalone HTML example
│   └── index.html              # Vanilla JS SDK usage
│
├── SDK_DOCUMENTATION.md        # Technical deep-dive
├── BOUNTY_SUBMISSION.md        # Formal submission document
├── SETUP.md                    # Installation & deployment guide
├── PROJECT_SUMMARY.md          # Project summary
├── VIDEO_SCRIPT.md             # Video demonstration script
└── package.json                # Root workspace config
```

---

## 🛠️ Complete Setup from Root Directory

### Prerequisites

- Node.js 18+ and npm
- MetaMask wallet
- Sepolia testnet ETH

### Installation

```bash
# Clone the repository
git clone https://github.com/FranciscoWatsica/fhevm-react-template.git
cd fhevm-react-template

# Install all dependencies (root, SDK, contracts, examples)
npm run install:all

# Compile smart contracts
npm run build:contracts
```

### Run Examples

#### Option 1: Next.js Example (Recommended)

```bash
# Start Next.js development server
npm run dev:nextjs

# Open http://localhost:3000
```

#### Option 2: Standalone HTML Example

```bash
# Serve static files
npx http-server public -p 8080

# Open http://localhost:8080
```

### Deploy Your Own Contract

```bash
# Configure environment
cd packages/contracts
cp .env.example .env
# Edit .env with your PRIVATE_KEY and INFURA_KEY

# Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia

# Verify on Etherscan
npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
```

---

## 🎨 SDK Usage Examples

### Next.js Integration (Full Example)

The `examples/nextjs` directory provides a complete Next.js application with SDK integration:

**Layout with FHEProvider:**
```tsx
'use client';

import { FHEProvider } from '../components/fhe/FHEProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FHEProvider>
          {children}
        </FHEProvider>
      </body>
    </html>
  );
}
```

**Component using SDK hooks:**
```tsx
'use client';

import { useFHEVMContext } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';
import { useEncrypt } from '../../../../packages/fhevm-sdk/src/react/useEncrypt';

export const EncryptionDemo = () => {
  const { client, isInitialized } = useFHEVMContext();
  const { encrypt, isEncrypting } = useEncrypt(client);

  const handleEncrypt = async () => {
    const result = await encrypt({
      value: 42,
      type: 'euint8',
      contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1'
    });
    console.log('Encrypted:', result);
  };

  if (!isInitialized) return <div>Initializing...</div>;

  return <button onClick={handleEncrypt}>Encrypt</button>;
};
```

### Vanilla JavaScript/TypeScript

```typescript
import { FHEVMClient } from '@fhevm-sdk/core';
import { ethers } from 'ethers';

// Initialize client
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const client = new FHEVMClient({
  provider,
  signer,
  chainId: 11155111, // Sepolia
});

await client.initialize();

// Encrypt a value
const encrypted = await client.encrypt({
  value: 42,
  type: 'euint8',
  contractAddress: '0xYourContract',
});

console.log('Encrypted:', encrypted.data);
console.log('Signature:', encrypted.signature);
```

### React Hooks

```tsx
import { useFHEVM, useEncrypt } from '@fhevm-sdk/react';

function MyComponent() {
  const { client, isInitialized } = useFHEVM({
    chainId: 11155111,
    autoInitialize: true,
  });

  const { encrypt, isEncrypting } = useEncrypt(client);

  const handleEncrypt = async () => {
    const result = await encrypt({
      value: 85,
      type: 'euint8',
      contractAddress: CONTRACT_ADDRESS,
    });
    console.log('Encrypted:', result);
  };

  if (!isInitialized) return <div>Initializing FHEVM...</div>;

  return (
    <button onClick={handleEncrypt} disabled={isEncrypting}>
      {isEncrypting ? 'Encrypting...' : 'Encrypt Value'}
    </button>
  );
}
```

### Vue 3 Composables

```vue
<script setup>
import { useFHEVM, useEncrypt } from '@fhevm-sdk/vue';

const { client, isInitialized } = useFHEVM({
  chainId: 11155111,
  autoInitialize: true,
});

const { encrypt, isEncrypting } = useEncrypt(client);

async function handleEncrypt() {
  const result = await encrypt({
    value: 85,
    type: 'euint8',
    contractAddress: CONTRACT_ADDRESS,
  });
  console.log('Encrypted:', result);
}
</script>

<template>
  <div v-if="!isInitialized">Initializing FHEVM...</div>
  <button v-else @click="handleEncrypt" :disabled="isEncrypting">
    {{ isEncrypting ? 'Encrypting...' : 'Encrypt Value' }}
  </button>
</template>
```

### API Routes (Next.js)

```typescript
// app/api/fhe/encrypt/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { value, type, contractAddress } = await request.json();

  // Server-side encryption logic
  return NextResponse.json({
    success: true,
    data: { encrypted: true, type, contractAddress }
  });
}
```

---

## 🎯 SDK Features

### Core Functionality

- **FHEVMClient**: Main client class for all FHEVM operations
  - `initialize()`: Set up fhevmjs instance
  - `encrypt()`: Encrypt values for contracts
  - `decrypt()`: Decrypt contract outputs
  - `createReencryptionRequest()`: Generate EIP-712 signatures

- **FHEVMContract**: High-level contract interaction
  - `callWithEncryption()`: Auto-encrypt specified parameters
  - `getContract()`: Access underlying ethers contract
  - Event listening and gas estimation

### React Hooks

- **useFHEVM**: Client initialization and management
- **useEncrypt**: Encryption with loading states
- **useDecrypt**: Decryption with loading states
- **useFHEVMContract**: Contract interactions
- **FHEVMProvider/useFHEVMContext**: Context for client sharing

### Vue 3 Composables

All React hooks have Vue 3 equivalents using the Composition API:
- Same functionality as React
- Reactive `ref` objects
- Vue lifecycle hooks

### Utilities

- **Validation**: `validateEncryptedValue()` - Input validation
- **Formatting**: `formatEncryptedValue()`, `shortenAddress()`
- **Retry Logic**: `retryWithBackoff()` - Exponential backoff
- **Error Handling**: `parseContractError()` - Descriptive errors

---

## 🏗️ Architecture Highlights

### Three-Layer Design

**Layer 1: Framework-Agnostic Core**
- Works in Node.js, browsers, or any JavaScript environment
- Pure TypeScript with no framework dependencies
- Wraps fhevmjs, ethers, and EIP-712 signatures

**Layer 2: React Adapter**
- Custom hooks following React patterns
- Context providers for global state
- Built-in loading and error states

**Layer 3: Vue Adapter**
- Composables using Vue 3 Composition API
- Reactive refs and computed values
- Vue lifecycle integration

### Key Design Principles

1. **Simplicity**: One-line encryption, intuitive API
2. **Type Safety**: Full TypeScript coverage
3. **Modularity**: Import only what you need
4. **Consistency**: Unified API across frameworks
5. **Error Handling**: Descriptive errors at every level
6. **Performance**: Optimized for production use

---

## 📚 Documentation

### SDK Documentation

- **[packages/fhevm-sdk/README.md](./packages/fhevm-sdk/README.md)**: Complete SDK API reference
- **[SDK_DOCUMENTATION.md](./SDK_DOCUMENTATION.md)**: Technical deep-dive and architecture
- **[SETUP.md](./SETUP.md)**: Installation and deployment guide
- **[BOUNTY_SUBMISSION.md](./BOUNTY_SUBMISSION.md)**: Formal bounty submission document

### Video Demonstration

demo1.mp4 demo2.mp4 demo3.mp4

## 🎮 Next.js Example Application

The `examples/nextjs` directory contains a comprehensive demonstration of the FHEVM SDK integrated into a modern Next.js application.

### Features

**SDK Integration Components:**
- **FHEProvider**: Context provider wrapping the application with FHEVM client
- **EncryptionDemo**: Interactive encryption demonstration component
- **ComputationDemo**: Homomorphic computation examples
- **KeyManager**: Key initialization and management interface

**Example Use Cases:**
- **BankingExample**: Private balance and transfer encryption
- **MedicalExample**: Confidential health data encryption

**Technical Implementation:**
- **API Routes**: Server-side FHE operations (`/api/fhe/*`, `/api/keys`)
- **React Hooks**: Client-side encryption with `useFHEVM`, `useEncrypt`, `useDecrypt`
- **Type Safety**: Full TypeScript coverage with custom types
- **Utility Libraries**: Security helpers, validation, and FHE client wrappers

### Running the Next.js Example

```bash
cd examples/nextjs
npm install
npm run dev
# Open http://localhost:3000
```

### Live Demo

Try the live demo at: **[https://franciscowatsica.github.io/FHEPetDNAMatching/](https://franciscowatsica.github.io/FHEPetDNAMatching/)**

### Example Components Overview

1. **Encryption Demo**: Demonstrates real-time value encryption with the SDK
2. **Computation Demo**: Shows homomorphic computation capabilities
3. **Key Manager**: Manages FHEVM client initialization and status
4. **Banking Example**: Privacy-preserving financial operations
5. **Medical Example**: Confidential health data management

### Smart Contract

- **Network**: Ethereum Sepolia Testnet
- **Address**: `0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1`
- **Verification**: [View on Etherscan](https://sepolia.etherscan.io/address/0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1)
- **Gateway API**: v2.0+ compatible

---

## 🔐 Security & Privacy

### Encryption

- All sensitive data encrypted with Zama fhEVM
- Homomorphic operations preserve privacy during computation
- Private keys never leave user's wallet
- EIP-712 signatures for access control

### Smart Contract Security

- Owner-only administrative functions
- Reentrancy protection on payable functions
- Access control enforced at contract level
- Gateway API validates all decryption requests

---

## 📊 Project Statistics

### Code Metrics

- **SDK Core**: 1,500+ lines of TypeScript
- **React Hooks**: 400+ lines
- **Vue Composables**: 350+ lines
- **Smart Contract**: 379 lines
- **Documentation**: 2,000+ lines
- **Examples**: 500+ lines

### Features

- ✅ 15+ SDK methods
- ✅ 9 React hooks/components
- ✅ 4 Vue composables
- ✅ 20+ utility functions
- ✅ Full TypeScript coverage
- ✅ 100% documented

---

## 🏆 Why This SDK Stands Out

### 1. True Framework Agnosticism

Unlike other solutions that are tied to a single framework, this SDK works everywhere:
- Backend services (Node.js)
- React applications
- Vue applications
- Vanilla JavaScript/HTML

### 2. Wagmi-Like Developer Experience

Inspired by wagmi's excellent DX, the SDK provides:
- Intuitive hook patterns
- Built-in loading and error states
- Familiar web3 developer experience
- Zero boilerplate code

### 3. Complete Abstraction

Developers don't need to understand:
- fhevmjs internals
- EIP-712 signature generation
- Gateway API v2.0+ integration
- Complex encryption flows

Just call simple methods and build.

### 4. Production-Ready

- TypeScript type safety throughout
- Comprehensive error handling
- Automatic retry logic with exponential backoff
- Input validation and sanitization
- Gas estimation helpers
- Event listening support

### 5. Comprehensive Documentation

- Complete API reference
- Quick start guides for each framework
- Real-world examples
- Architecture explanations
- Video demonstration

---

## 🛠️ Technology Stack

- **SDK Core**: TypeScript, fhevmjs, ethers.js v5
- **React Support**: React 16.8+ (Hooks)
- **Vue Support**: Vue 3 (Composition API)
- **Smart Contracts**: Solidity ^0.8.24, Hardhat
- **Blockchain**: Ethereum Sepolia Testnet
- **Privacy**: Zama fhEVM (Gateway API v2.0+)
- **Frontend Examples**: Next.js 14, HTML5

---

## 🚀 NPM Package

The SDK is designed to be published as an npm package:

```bash
npm install @fhevm-pet-dna/sdk ethers@^5.7.0
```

Package exports:
- `@fhevm-pet-dna/sdk` - Core SDK (framework-agnostic)
- `@fhevm-pet-dna/sdk/react` - React hooks
- `@fhevm-pet-dna/sdk/vue` - Vue 3 composables

---

## 📋 Bounty Requirements Checklist

- ✅ **Universal FHEVM SDK Package** - Complete framework-agnostic core
- ✅ **Initialization Flow** - FHEVMClient with auto-setup
- ✅ **Encryption/Decryption** - Full support with EIP-712 signatures
- ✅ **Contract Helpers** - FHEVMContract with auto-encryption
- ✅ **Framework Adapters** - React hooks + Vue composables
- ✅ **Documentation** - 2,000+ lines of comprehensive docs
- ✅ **Examples** - Next.js app + standalone HTML
- ✅ **Smart Contract** - Deployed and verified on Sepolia
- ✅ **Video Demo** - 3-minute demonstration with subtitles
- ✅ **Live Deployment** - GitHub Pages + Etherscan verification

See [BOUNTY_SUBMISSION.md](./BOUNTY_SUBMISSION.md) for detailed evaluation.

---

## 🎥 Video Demonstration

A 3-minute video demonstration is available showing:
- SDK installation and setup from root directory
- Framework-agnostic core usage
- React hooks integration
- Vue composables usage
- Pet DNA matching use case
- Live deployment walkthrough

demo1.mp4 demo2.mp4 demo3.mp4

---

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📄 License

MIT License - Free to use and extend

---

## 🌟 Future Enhancements

- Additional framework adapters (Angular, Svelte)
- Browser extension for easy key management
- Testing utilities for dApp developers
- CI/CD templates for FHEVM projects
- Advanced contract interaction patterns
- NPM package publication
- Mainnet deployment support

---

## 🙏 Acknowledgments

- **Zama** for FHEVM technology and inspiration
- **fhevmjs** library for core encryption functionality
- **Ethers.js** for blockchain interactions
- **React** and **Vue** communities for excellent patterns
- **Ethereum Foundation** for Sepolia testnet

---

## 📞 Links & Resources

- **Live Demo**: [https://franciscowatsica.github.io/FHEPetDNAMatching/](https://franciscowatsica.github.io/FHEPetDNAMatching/)
- **GitHub Repository**: [https://github.com/FranciscoWatsica/fhevm-react-template](https://github.com/FranciscoWatsica/fhevm-react-template)
- **Smart Contract**: [0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1](https://sepolia.etherscan.io/address/0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1)
- **Zama Docs**: [https://docs.zama.ai/fhevm](https://docs.zama.ai/fhevm)
- **SDK Documentation**: [packages/fhevm-sdk/README.md](./packages/fhevm-sdk/README.md)

---

**Making FHEVM Development Simple, One Encrypted Computation at a Time** 🔐✨

This SDK represents hundreds of hours of development, testing, and documentation to create a truly universal, developer-friendly solution for building privacy-preserving dApps with FHEVM.
