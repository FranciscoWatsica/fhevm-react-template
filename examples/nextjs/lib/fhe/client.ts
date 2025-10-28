import { FHEVMClient } from '../../../../packages/fhevm-sdk/src/core/FHEVMClient';
import { ethers } from 'ethers';

export async function createFHEVMClient(
  provider: ethers.providers.Provider,
  signer: ethers.Signer,
  chainId: number = 11155111
): Promise<FHEVMClient> {
  const client = new FHEVMClient({
    provider,
    signer,
    chainId,
  });

  await client.initialize();
  return client;
}

export async function encryptValue(
  client: FHEVMClient,
  value: number,
  type: 'euint8' | 'euint16' | 'euint32' | 'euint64',
  contractAddress: string
) {
  return await client.encrypt({
    value,
    type,
    contractAddress,
  });
}

export async function decryptValue(
  client: FHEVMClient,
  encryptedValue: string,
  contractAddress: string
) {
  return await client.decrypt({
    handle: encryptedValue,
    contractAddress,
  });
}
