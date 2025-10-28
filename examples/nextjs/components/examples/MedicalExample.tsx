'use client';

import React, { useState } from 'react';
import { useFHEVMContext } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';
import { useEncrypt } from '../../../../packages/fhevm-sdk/src/react/useEncrypt';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const MedicalExample: React.FC = () => {
  const { client, isInitialized } = useFHEVMContext();
  const { encrypt, isEncrypting } = useEncrypt(client);
  const [heartRate, setHeartRate] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [status, setStatus] = useState('');

  const handleEncryptVitals = async () => {
    if (!heartRate || !bloodPressure || !glucoseLevel) {
      setStatus('Please fill in all vital signs');
      return;
    }

    try {
      setStatus('Encrypting medical data...');

      await encrypt({
        value: parseInt(heartRate),
        type: 'euint8',
        contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1'
      });

      await encrypt({
        value: parseInt(bloodPressure),
        type: 'euint8',
        contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1'
      });

      await encrypt({
        value: parseInt(glucoseLevel),
        type: 'euint8',
        contractAddress: '0xC16ebe7Cb0A3B057437B8A3568d6Df2FB02812d1'
      });

      setStatus('All medical data encrypted successfully! Your health information is now private and secure.');
    } catch (error) {
      setStatus('Encryption failed');
      console.error(error);
    }
  };

  if (!isInitialized) {
    return (
      <Card title="Private Medical Records">
        <p className="text-gray-600">Initializing FHEVM client...</p>
      </Card>
    );
  }

  return (
    <Card title="Private Medical Records">
      <div className="space-y-6">
        <p className="text-gray-700">
          Store your medical vitals with complete privacy using homomorphic encryption.
        </p>

        <div className="space-y-4">
          <Input
            label="Heart Rate (bpm)"
            type="number"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            placeholder="60-100"
            min="0"
            max="255"
          />

          <Input
            label="Blood Pressure (systolic)"
            type="number"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
            placeholder="120"
            min="0"
            max="255"
          />

          <Input
            label="Glucose Level (mg/dL)"
            type="number"
            value={glucoseLevel}
            onChange={(e) => setGlucoseLevel(e.target.value)}
            placeholder="70-100"
            min="0"
            max="255"
          />

          <Button
            onClick={handleEncryptVitals}
            loading={isEncrypting}
            disabled={!heartRate || !bloodPressure || !glucoseLevel}
          >
            Encrypt Medical Data
          </Button>
        </div>

        {status && (
          <div className="p-4 bg-green-50 rounded-md">
            <p className="text-sm text-green-900">{status}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
