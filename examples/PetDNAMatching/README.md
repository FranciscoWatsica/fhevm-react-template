# Privacy Pet DNA Matching System

A revolutionary blockchain-based platform for privacy-preserving pet breeding compatibility matching. This system enables pet owners to find optimal breeding partners while keeping sensitive genetic information completely private and encrypted.

---

## 🎯 Core Concept

**Privacy Pet DNA Matching** - A pet breeding compatibility system that matches the best breeding partners **without revealing specific genetic information**, preventing hereditary diseases through encrypted genetic analysis.

Traditional pet breeding platforms expose sensitive genetic data, creating privacy risks and potential discrimination. Our system uses Fully Homomorphic Encryption (FHE) to perform complex genetic compatibility calculations on encrypted data, ensuring that:

- ✅ Pet genetic markers remain encrypted on-chain
- ✅ Health scores and temperament data stay private
- ✅ Compatibility matching happens without data exposure
- ✅ Only final match results are revealed to owners
- ✅ Hereditary disease risks are minimized through smart matching

---

## 🔬 How It Works

### 1. **Encrypted Pet Registration**
Pet owners register their pets with sensitive data that gets encrypted before being stored on the blockchain:
- Genetic markers (3 unique DNA identifiers)
- Health score (0-100 rating)
- Temperament score (behavioral compatibility)
- Basic public info (name, breed, age)

All sensitive data is encrypted using Zama's fhEVM technology and never exposed in plain text.

### 2. **Privacy-Preserving Matching**
When requesting a compatibility match between two pets:
- Both pets' encrypted genetic data is processed on-chain
- Homomorphic operations calculate compatibility scores
- Health compatibility, temperament matching, and genetic diversity are analyzed
- All computations happen on encrypted data without decryption

### 3. **Secure Results**
After encrypted computation:
- Only the final compatibility score (0-100) is revealed
- Match threshold of 70%+ indicates good breeding compatibility
- Original genetic data remains permanently encrypted
- Pet owners can make informed decisions without exposing private information

---

## 🚀 Live Demo

**Try it now:** [https://franciscowatsica.github.io/PetDNAMatching/](https://franciscowatsica.github.io/PetDNAMatching/)

**Video Demonstration:** `demo.mp4` included in the repository (GitHub doesn't support direct video playback - please download to view the full demonstration)

**GitHub Repository:** [https://github.com/FranciscoWatsica/PetDNAMatching](https://github.com/FranciscoWatsica/PetDNAMatching)

---

## 🛠️ Technology Stack

- **Blockchain**: Ethereum Sepolia Testnet
- **Privacy Layer**: Zama fhEVM (Fully Homomorphic Encryption)
- **Smart Contract**: Solidity ^0.8.24 with SepoliaConfig
- **Frontend**: HTML5, JavaScript, Ethers.js v5
- **Wallet**: MetaMask integration
- **Encrypted Types**: euint8, euint16 for secure data handling

---

## ✨ Features

### For Pet Owners
- 🔐 **Complete Privacy**: Genetic data never leaves encryption
- 🧬 **DNA Compatibility**: Analyze genetic marker compatibility
- 💚 **Health Matching**: Ensure both pets meet health standards
- 😺 **Temperament Analysis**: Match behavioral compatibility
- 📊 **Compatibility Scores**: Clear 0-100% match ratings
- 🔄 **Breeding Control**: Enable/disable breeding availability
- 📜 **Match History**: View all past compatibility checks

### For the Ecosystem
- 🏥 **Disease Prevention**: Reduce hereditary disease transmission
- 🎯 **Quality Breeding**: Promote healthy breeding practices
- 🌐 **Transparent System**: All operations verifiable on-chain
- 🔓 **Open Platform**: Decentralized, censorship-resistant
- 💡 **Educational**: Learn about genetic compatibility

---

## 📖 Getting Started

### Prerequisites
- MetaMask wallet installed
- Sepolia testnet ETH (for gas fees)
- Modern web browser (Chrome, Firefox, Brave)

### Using the Platform

1. **Connect Wallet**
   - Click "Connect Wallet" button
   - Approve MetaMask connection
   - Switch to Sepolia testnet if prompted

2. **Register Your Pet**
   - Enter pet's basic information (name, breed, age)
   - Input health risk assessment (0-100)
   - Provide genetic markers (4 unique identifiers)
   - Submit transaction and wait for confirmation

3. **Create Matching Profile**
   - Set minimum health score requirements
   - Define temperament preferences
   - Specify maximum age for breeding partner
   - Save profile to smart contract

4. **Request Compatibility Match**
   - Select your pet (Pet ID 1)
   - Choose potential breeding partner (Pet ID 2)
   - Pay 0.001 ETH matching fee
   - Wait for encrypted computation to complete

5. **View Results**
   - Check compatibility score (0-100%)
   - Scores above 70% indicate good matches
   - Review all past matches in match history
   - Make informed breeding decisions

---

## 🏗️ Smart Contract Architecture

### Core Contract: PetDNAMatching

```solidity
contract PetDNAMatching is SepoliaConfig {
    struct Pet {
        uint256 id;
        address owner;
        string name;
        string species;
        string breed;
        uint256 birthYear;
        euint8 healthScore;          // Encrypted
        euint16 geneticMarker1;      // Encrypted
        euint16 geneticMarker2;      // Encrypted
        euint16 geneticMarker3;      // Encrypted
        euint8 temperament;          // Encrypted
        bool availableForBreeding;
    }

    struct MatchResult {
        uint256 requestId;
        uint256 petId1;
        uint256 petId2;
        uint8 compatibilityScore;    // Revealed result
        bool isMatched;              // Score >= 70%
        uint256 matchTime;
    }
}
```

### Key Functions

- `registerPet()`: Encrypt and store pet's genetic data
- `createMatchingProfile()`: Set encrypted breeding preferences
- `requestMatching()`: Initiate compatibility analysis (payable)
- `processMatchingResult()`: Gateway callback for results
- `getPetInfo()`: Retrieve non-sensitive pet information
- `getPetMatches()`: View match history

---

## 🔐 Privacy Features

### Data Encryption
All sensitive pet data is encrypted using Zama's fhEVM:

```javascript
// Frontend encryption example
const healthScore = 85; // Private health score
const marker1 = 12345;  // Private genetic marker

// Encrypted on-chain storage
euint8 encryptedHealth = FHE.asEuint8(healthScore);
euint16 encryptedMarker = FHE.asEuint16(marker1);
```

### Encrypted Operations
Compatibility calculations use homomorphic operations:

```solidity
// Calculate health compatibility (encrypted)
euint8 healthSum = FHE.add(pet1.healthScore, pet2.healthScore);

// Calculate temperament difference (encrypted)
euint8 temperamentDiff = FHE.sub(pet1.temperament, pet2.temperament);

// Request decryption only for final result
FHE.requestDecryption([healthSum, temperamentDiff], callback);
```

### Access Control
- Pet owners can only access their own encrypted data
- Contract has computation permissions only
- No third party can decrypt genetic information
- Gateway API v2.0+ ensures secure decryption

---

## 🧮 Compatibility Scoring Algorithm

The system calculates compatibility using three factors:

### 1. Health Compatibility (50 points max)
- Both pets' health scores combined
- Higher combined score = better compatibility
- ≥160: 50 points | ≥140: 40 points | ≥120: 30 points

### 2. Temperament Compatibility (30 points max)
- Difference between temperament scores
- Lower difference = better compatibility
- ≤2: 30 points | ≤4: 20 points | >4: 10 points

### 3. Genetic Diversity (20 points base)
- Ensures breeding variation
- Prevents inbreeding risks

**Total Score**: 0-100 points
**Match Threshold**: ≥70 points indicates good breeding compatibility

---

## 📡 Deployed Contract

- **Network**: Ethereum Sepolia Testnet
- **Contract Address**: `0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1`
- **Chain ID**: 11155111
- **Gateway API**: v2.0+ Compatible
- **Etherscan**: [View Contract](https://sepolia.etherscan.io/address/0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1)
- **Matching Cost**: 0.001 ETH

---

## ⚙️ Configuration

### Network Details
```javascript
const SEPOLIA_CONFIG = {
  chainId: 11155111,
  rpcUrl: 'https://sepolia.infura.io/v3/YOUR_KEY',
  contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1',
  gatewayUrl: 'https://gateway.zama.ai'
};
```

### MetaMask Setup
1. Add Sepolia testnet to MetaMask
2. Get testnet ETH from [Sepolia Faucet](https://sepoliafaucet.com/)
3. Connect to the dApp
4. Approve transactions

---

## 🎬 Video Demonstration

A complete demonstration video (`demo.mp4`) is included in this repository showing:
- Pet registration with encrypted genetic data
- Creating matching profiles
- Requesting compatibility matches
- Viewing encrypted data on-chain
- Receiving match results

**Note**: GitHub doesn't support direct video playback in the browser. Please download `demo.mp4` to view the full demonstration.

---

## 🛡️ Security Considerations

### Encryption
- All genetic data encrypted with Zama fhEVM
- Private keys never leave user's wallet
- Homomorphic operations preserve privacy

### Smart Contract Security
- Owner-only administrative functions
- Pet owner verification for modifications
- Reentrancy protection on payable functions
- Secure random number generation

### Data Privacy
- No plain-text genetic data stored
- Computation results only revealed when needed
- Access control enforced at contract level
- Gateway API validates all decryption requests

---

## 🤝 Contributing

We welcome contributions to improve privacy-preserving pet breeding! Please feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 🌟 Future Roadmap

- [ ] Multi-species support (cats, birds, reptiles)
- [ ] Advanced genetic marker analysis
- [ ] Breeding certificate NFTs
- [ ] Veterinarian verification system
- [ ] Mobile app integration
- [ ] Mainnet deployment
- [ ] DAO governance for platform decisions

---

## 📄 License

MIT License - Feel free to use this project for your own applications

---

## 🙏 Acknowledgments

- **Zama** for fhEVM technology and privacy infrastructure
- **Ethereum Foundation** for Sepolia testnet
- **MetaMask** for wallet integration
- The blockchain and privacy community

---

**Protecting Pet Genetics, One Encrypted Match at a Time** 🐾🔐

For questions, suggestions, or collaboration opportunities, please open an issue on GitHub or contact the development team.
