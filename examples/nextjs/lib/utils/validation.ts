/**
 * Validation utilities
 */

export function validateNumber(
  value: string,
  min?: number,
  max?: number
): { valid: boolean; error?: string } {
  const num = parseInt(value);

  if (isNaN(num)) {
    return { valid: false, error: 'Invalid number' };
  }

  if (min !== undefined && num < min) {
    return { valid: false, error: `Value must be at least ${min}` };
  }

  if (max !== undefined && num > max) {
    return { valid: false, error: `Value must be at most ${max}` };
  }

  return { valid: true };
}

export function validateFHEType(value: number, type: string): boolean {
  switch (type) {
    case 'euint8':
      return value >= 0 && value <= 255;
    case 'euint16':
      return value >= 0 && value <= 65535;
    case 'euint32':
      return value >= 0 && value <= 4294967295;
    case 'euint64':
      return value >= 0;
    default:
      return false;
  }
}
