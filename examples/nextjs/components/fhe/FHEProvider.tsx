'use client';

import React from 'react';
import { FHEVMProvider as SDKProvider } from '../../../../packages/fhevm-sdk/src/react/FHEVMContext';

interface FHEProviderProps {
  children: React.ReactNode;
}

export const FHEProvider: React.FC<FHEProviderProps> = ({ children }) => {
  return (
    <SDKProvider chainId={11155111} autoInitialize>
      {children}
    </SDKProvider>
  );
};
