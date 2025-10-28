export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface EncryptRequest {
  value: number;
  type: string;
  contractAddress: string;
}

export interface DecryptRequest {
  handle: string;
  contractAddress: string;
  signature: string;
}

export interface KeysResponse {
  publicKey: string;
  chainId: number;
}
