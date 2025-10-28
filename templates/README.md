# FHEVM SDK Templates

This directory contains framework-specific templates demonstrating the Universal FHEVM SDK.

## Available Templates

### Next.js Template
Location: `../examples/nextjs/`

A complete Next.js 14 application showcasing:
- React hooks integration (`useFHEVM`, `useEncrypt`, `useDecrypt`)
- FHEVMProvider context setup
- API routes for FHE operations
- Component examples (Banking, Medical use cases)
- Full TypeScript support

**Quick Start:**
```bash
cd ../examples/nextjs
npm install
npm run dev
```

### React Template (Vanilla)
See the Next.js template above - it can be adapted for Create React App or Vite by removing Next.js specific features.

### Vue Template
The SDK includes Vue 3 composables. To create a Vue template:

```bash
npm create vue@latest my-fhevm-app
cd my-fhevm-app
npm install ../../../../packages/fhevm-sdk
```

Then use the SDK:
```vue
<script setup>
import { useFHEVM, useEncrypt } from '@fhevm-sdk/vue';

const { client, isInitialized } = useFHEVM({
  chainId: 11155111,
  autoInitialize: true
});

const { encrypt, isEncrypting } = useEncrypt(client);
</script>
```

## Template Structure

Each template demonstrates:
1. SDK initialization
2. Encryption/decryption operations
3. Contract interaction helpers
4. Error handling and loading states
5. Real-world use case examples

## SDK Package

The core SDK is located at: `../packages/fhevm-sdk/`

See the [SDK README](../packages/fhevm-sdk/README.md) for complete API documentation.
