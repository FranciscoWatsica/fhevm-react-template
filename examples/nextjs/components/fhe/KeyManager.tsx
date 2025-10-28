'use client';

import React from 'react';
import { useFHEVMContext } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const KeyManager: React.FC = () => {
  const { client, isInitialized, initialize, reset, status } = useFHEVMContext();

  return (
    <Card title="Key Manager">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium text-gray-700">Status:</div>
          <div className={isInitialized ? 'text-green-600' : 'text-yellow-600'}>
            {status}
          </div>

          <div className="font-medium text-gray-700">Client:</div>
          <div className={client ? 'text-green-600' : 'text-gray-400'}>
            {client ? 'Ready' : 'Not initialized'}
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={initialize} disabled={isInitialized} size="sm">
            Initialize
          </Button>
          <Button onClick={reset} variant="secondary" size="sm">
            Reset
          </Button>
        </div>
      </div>
    </Card>
  );
};
