# FHEVM SDK Documentation

Complete documentation for the Universal FHEVM SDK.

## 📚 Documentation Index

### Core Documentation
- [Main README](../README.md) - Project overview and quick start
- [SDK Documentation](../SDK_DOCUMENTATION.md) - Technical deep-dive
- [Setup Guide](../SETUP.md) - Installation and deployment
- [Bounty Submission](../BOUNTY_SUBMISSION.md) - Formal submission details

### SDK Package
- [SDK Package README](../packages/fhevm-sdk/README.md) - Complete API reference

### Examples
- [Next.js Example](../examples/nextjs/README.md) - React integration guide
- [Templates](../templates/README.md) - Framework-specific templates

### Smart Contracts
- [Contracts Package](../packages/contracts/README.md) - Smart contract documentation

## 🎯 Quick Links

### Getting Started
1. Read the [Main README](../README.md) for project overview
2. Follow the [Setup Guide](../SETUP.md) for installation
3. Check the [SDK Documentation](../SDK_DOCUMENTATION.md) for API details
4. Explore [examples](../examples/) for implementation patterns

### API Reference

#### Core SDK
```typescript
import { FHEVMClient } from '@fhevm-sdk/core';

const client = new FHEVMClient({ provider, signer, chainId });
await client.initialize();
const encrypted = await client.encrypt({ value, type, contractAddress });
```

#### React Hooks
```typescript
import { useFHEVM, useEncrypt } from '@fhevm-sdk/react';

const { client, isInitialized } = useFHEVM({ chainId: 11155111 });
const { encrypt, isEncrypting } = useEncrypt(client);
```

#### Vue Composables
```typescript
import { useFHEVM, useEncrypt } from '@fhevm-sdk/vue';

const { client, isInitialized } = useFHEVM({ chainId: 11155111 });
const { encrypt, isEncrypting } = useEncrypt(client);
```

## 🔐 Security & Privacy

### Encryption
All sensitive data is encrypted using Zama's fhEVM technology, ensuring:
- Data remains encrypted during computation
- Private keys never leave the user's wallet
- EIP-712 signatures for access control
- Gateway API v2.0+ compatibility

### Best Practices
1. Always validate input before encryption
2. Use appropriate FHE types (euint8, euint16, euint32, euint64)
3. Implement proper error handling
4. Test thoroughly on testnet before mainnet deployment

## 📖 Additional Resources

- [Zama FHEVM Documentation](https://docs.zama.ai/fhevm)
- [Live Demo](https://franciscowatsica.github.io/FHEPetDNAMatching/)
- [GitHub Repository](https://github.com/FranciscoWatsica/fhevm-react-template)
- [Smart Contract on Etherscan](https://sepolia.etherscan.io/address/0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1)

## 🤝 Contributing

Contributions are welcome! Please see the main [README](../README.md) for guidelines.

## 📄 License

MIT License - see LICENSE file for details
