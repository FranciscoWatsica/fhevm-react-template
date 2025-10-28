'use client';

import React, { useState } from 'react';
import { useFHEVMContext } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';
import { useEncrypt } from '../../../../packages/fhevm-sdk/src/react/useEncrypt';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const EncryptionDemo: React.FC = () => {
  const { client, isInitialized } = useFHEVMContext();
  const { encrypt, isEncrypting, lastResult } = useEncrypt(client);
  const [value, setValue] = useState('');
  const [contractAddress, setContractAddress] = useState('0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1');

  const handleEncrypt = async () => {
    if (!value) return;

    try {
      const result = await encrypt({
        value: parseInt(value),
        type: 'euint8',
        contractAddress
      });
      console.log('Encrypted successfully:', result);
    } catch (error) {
      console.error('Encryption failed:', error);
    }
  };

  if (!isInitialized) {
    return (
      <Card title="Encryption Demo">
        <p className="text-gray-600">Initializing FHEVM client...</p>
      </Card>
    );
  }

  return (
    <Card title="Encryption Demo">
      <div className="space-y-4">
        <Input
          label="Value to Encrypt (0-255)"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a number"
          min="0"
          max="255"
        />

        <Input
          label="Contract Address"
          type="text"
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder="0x..."
        />

        <Button onClick={handleEncrypt} loading={isEncrypting} disabled={!value}>
          Encrypt Value
        </Button>

        {lastResult && (
          <div className="mt-4 p-4 bg-green-50 rounded-md">
            <p className="text-sm font-medium text-green-900">Encryption Successful!</p>
            <p className="text-xs text-green-700 mt-1 break-all">
              Data: {Array.from(lastResult.data.slice(0, 20)).map(b => b.toString(16).padStart(2, '0')).join('')}...
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
