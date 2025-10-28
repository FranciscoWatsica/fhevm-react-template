export type FHEType = 'euint8' | 'euint16' | 'euint32' | 'euint64';

export interface EncryptedData {
  data: Uint8Array;
  signature: string;
  type: FHEType;
}

export interface DecryptedData {
  value: number | bigint;
  type: FHEType;
}

export interface FHEClientConfig {
  chainId: number;
  gatewayUrl?: string;
  autoInitialize?: boolean;
}
