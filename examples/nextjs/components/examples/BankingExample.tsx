'use client';

import React, { useState } from 'react';
import { useFHEVMContext } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';
import { useEncrypt } from '../../../../packages/fhevm-sdk/src/react/useEncrypt';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const BankingExample: React.FC = () => {
  const { client, isInitialized } = useFHEVMContext();
  const { encrypt, isEncrypting } = useEncrypt(client);
  const [balance, setBalance] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [status, setStatus] = useState('');

  const handleEncryptBalance = async () => {
    if (!balance) return;

    try {
      setStatus('Encrypting balance...');
      const result = await encrypt({
        value: parseInt(balance),
        type: 'euint64',
        contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1'
      });
      setStatus('Balance encrypted successfully! Your balance is now private.');
      console.log('Encrypted balance:', result);
    } catch (error) {
      setStatus('Encryption failed');
      console.error(error);
    }
  };

  const handlePrivateTransfer = async () => {
    if (!transferAmount) return;

    try {
      setStatus('Processing private transfer...');
      const result = await encrypt({
        value: parseInt(transferAmount),
        type: 'euint64',
        contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1'
      });
      setStatus('Transfer amount encrypted! Transaction can be sent privately.');
      console.log('Encrypted transfer:', result);
    } catch (error) {
      setStatus('Transfer failed');
      console.error(error);
    }
  };

  if (!isInitialized) {
    return (
      <Card title="Private Banking Example">
        <p className="text-gray-600">Initializing FHEVM client...</p>
      </Card>
    );
  }

  return (
    <Card title="Private Banking Example">
      <div className="space-y-6">
        <p className="text-gray-700">
          Encrypt your account balance and transfer amounts for complete financial privacy.
        </p>

        <div className="space-y-4">
          <div>
            <Input
              label="Account Balance"
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              placeholder="Enter balance"
              helperText="Your balance will be encrypted before storing"
            />
            <Button
              onClick={handleEncryptBalance}
              loading={isEncrypting}
              disabled={!balance}
              className="mt-2"
            >
              Encrypt Balance
            </Button>
          </div>

          <div>
            <Input
              label="Transfer Amount"
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              placeholder="Enter amount"
              helperText="Transfer amount will remain private"
            />
            <Button
              onClick={handlePrivateTransfer}
              loading={isEncrypting}
              disabled={!transferAmount}
              className="mt-2"
            >
              Private Transfer
            </Button>
          </div>
        </div>

        {status && (
          <div className="p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-900">{status}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
