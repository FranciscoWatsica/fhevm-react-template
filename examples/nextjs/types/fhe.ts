export type FHEType = 'euint8' | 'euint16' | 'euint32' | 'euint64';

export interface EncryptionInput {
  value: number;
  type: FHEType;
  contractAddress: string;
}

export interface DecryptionInput {
  handle: string;
  contractAddress: string;
}

export interface EncryptedResult {
  data: Uint8Array;
  signature: string;
}
