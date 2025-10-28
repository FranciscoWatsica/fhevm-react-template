# FHEVM SDK - Next.js Integration Example

This Next.js application demonstrates complete integration of the Universal FHEVM SDK for privacy-preserving computations.

## 🎯 What's Included

### Components

**UI Components** (`components/ui/`)
- `Button.tsx` - Reusable button with loading states
- `Input.tsx` - Form input with validation
- `Card.tsx` - Content container

**FHE Components** (`components/fhe/`)
- `FHEProvider.tsx` - SDK context provider
- `EncryptionDemo.tsx` - Interactive encryption demo
- `ComputationDemo.tsx` - Homomorphic computation demo
- `KeyManager.tsx` - Client initialization management

**Example Use Cases** (`components/examples/`)
- `BankingExample.tsx` - Private financial operations
- `MedicalExample.tsx` - Confidential health data

### API Routes

**FHE Operations** (`app/api/fhe/`)
- `route.ts` - Main FHE endpoint
- `encrypt/route.ts` - Encryption API
- `decrypt/route.ts` - Decryption API
- `compute/route.ts` - Computation API

**Key Management** (`app/api/keys/`)
- `route.ts` - Public key retrieval

### Libraries

**FHE Utilities** (`lib/fhe/`)
- `client.ts` - Client-side FHE operations
- `server.ts` - Server-side FHE processing
- `keys.ts` - Key management
- `types.ts` - FHE type definitions

**Helper Utilities** (`lib/utils/`)
- `security.ts` - Security helpers
- `validation.ts` - Input validation

### Hooks

**Custom React Hooks** (`hooks/`)
- `useFHE.ts` - FHEVM client access
- `useEncryption.ts` - Encryption operations
- `useComputation.ts` - Computation operations

### Types

**TypeScript Definitions** (`types/`)
- `fhe.ts` - FHE-related types
- `api.ts` - API request/response types

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- MetaMask wallet
- Sepolia testnet ETH

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Usage

### Basic SDK Integration

**1. Wrap your app with FHEProvider:**

```tsx
// app/layout.tsx
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

**2. Use SDK hooks in components:**

```tsx
'use client';

import { useFHEVMContext } from '../../packages/fhevm-sdk/src/react/FHEVMContext';
import { useEncrypt } from '../../packages/fhevm-sdk/src/react/useEncrypt';

export function MyComponent() {
  const { client, isInitialized } = useFHEVMContext();
  const { encrypt, isEncrypting } = useEncrypt(client);

  const handleEncrypt = async () => {
    const result = await encrypt({
      value: 42,
      type: 'euint8',
      contractAddress: '0xYourContract'
    });
    console.log('Encrypted:', result);
  };

  if (!isInitialized) return <div>Initializing...</div>;

  return (
    <button onClick={handleEncrypt} disabled={isEncrypting}>
      {isEncrypting ? 'Encrypting...' : 'Encrypt Value'}
    </button>
  );
}
```

**3. Create API routes for server-side operations:**

```typescript
// app/api/fhe/encrypt/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { value, type, contractAddress } = await request.json();

  // Server-side encryption logic here

  return NextResponse.json({
    success: true,
    data: { encrypted: true }
  });
}
```

## 📁 Project Structure

```
examples/nextjs/
├── app/
│   ├── layout.tsx              # Root layout with FHEProvider
│   ├── page.tsx                # Main demo page
│   ├── globals.css             # Global styles
│   └── api/                    # API routes
│       ├── fhe/
│       │   ├── route.ts
│       │   ├── encrypt/route.ts
│       │   ├── decrypt/route.ts
│       │   └── compute/route.ts
│       └── keys/route.ts
├── components/
│   ├── ui/                     # Base UI components
│   ├── fhe/                    # FHE functionality components
│   └── examples/               # Use case examples
├── lib/
│   ├── fhe/                    # FHE utilities
│   └── utils/                  # Helper functions
├── hooks/                      # Custom React hooks
├── types/                      # TypeScript definitions
├── package.json
└── tsconfig.json
```

## 🎯 Features Demonstrated

### 1. FHEVM Client Initialization
- Automatic client setup with FHEProvider
- Status monitoring with KeyManager
- Error handling and retry logic

### 2. Encryption Operations
- Value encryption with type safety
- EIP-712 signature generation
- Loading states and error handling

### 3. Decryption Operations
- Secure decryption with access control
- Result validation
- Type-safe outputs

### 4. Homomorphic Computations
- Operations on encrypted data
- No data exposure during computation
- Result privacy preservation

### 5. Real-World Use Cases
- Banking: Private balances and transfers
- Medical: Confidential health records
- Extensible to other privacy-critical applications

## 🔐 Security Considerations

- All sensitive data encrypted before transmission
- Private keys remain in user's wallet
- EIP-712 signatures for access control
- Gateway API v2.0+ for decryption
- Input validation on all operations

## 📚 Learn More

- [SDK Documentation](../../packages/fhevm-sdk/README.md)
- [Main README](../../README.md)
- [Zama FHEVM Docs](https://docs.zama.ai/fhevm)

## 🤝 Contributing

This example is part of the Universal FHEVM SDK project. Contributions welcome!

## 📄 License

MIT License
