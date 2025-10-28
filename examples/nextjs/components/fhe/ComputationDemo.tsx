'use client';

import React, { useState } from 'react';
import { useFHEVMContext } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const ComputationDemo: React.FC = () => {
  const { client, isInitialized } = useFHEVMContext();
  const [status, setStatus] = useState<string>('');

  const performComputation = async () => {
    if (!client) return;

    setStatus('Performing homomorphic computation...');

    // Simulate computation
    setTimeout(() => {
      setStatus('Computation completed successfully on encrypted data!');
    }, 2000);
  };

  if (!isInitialized) {
    return (
      <Card title="Computation Demo">
        <p className="text-gray-600">Initializing FHEVM client...</p>
      </Card>
    );
  }

  return (
    <Card title="Homomorphic Computation Demo">
      <div className="space-y-4">
        <p className="text-gray-700">
          Perform computations on encrypted data without decrypting it.
        </p>

        <Button onClick={performComputation}>
          Run Computation
        </Button>

        {status && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-900">{status}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
