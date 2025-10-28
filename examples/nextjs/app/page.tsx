'use client';

import { EncryptionDemo } from '../components/fhe/EncryptionDemo';
import { ComputationDemo } from '../components/fhe/ComputationDemo';
import { KeyManager } from '../components/fhe/KeyManager';
import { BankingExample } from '../components/examples/BankingExample';
import { MedicalExample } from '../components/examples/MedicalExample';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FHEVM SDK Demo - Next.js Integration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore privacy-preserving computations with Fully Homomorphic Encryption.
            This example demonstrates the FHEVM SDK integrated with Next.js.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <KeyManager />
          </div>
          <div className="lg:col-span-2">
            <EncryptionDemo />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ComputationDemo />
          <BankingExample />
        </div>

        <div className="grid grid-cols-1">
          <MedicalExample />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About This Demo
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              This Next.js application demonstrates the Universal FHEVM SDK with complete
              framework integration. The SDK provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Framework-agnostic core for encryption and decryption</li>
              <li>React hooks for easy component integration</li>
              <li>Vue 3 composables (available in separate builds)</li>
              <li>Complete TypeScript support</li>
              <li>Built-in loading states and error handling</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="text-sm text-blue-900">
                <strong>Network:</strong> Ethereum Sepolia Testnet (Chain ID: 11155111)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
