/**
 * Security utilities for FHE operations
 */

export function sanitizeInput(input: string): string {
  return input.replace(/[^a-zA-Z0-9]/g, '');
}

export function validateAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export function validateEncryptedValue(value: any): boolean {
  if (!value) return false;
  if (!value.data || !value.signature) return false;
  return true;
}

export function shortenAddress(address: string, chars: number = 4): string {
  if (!validateAddress(address)) return address;
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}
