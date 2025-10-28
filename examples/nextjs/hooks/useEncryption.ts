import { useEncrypt } from '../../../packages/fhevm-sdk/src/react/useEncrypt';
import { useFHEVMContext } from '../../../packages/fhevm-sdk/src/react/FHEVMContext';

export function useEncryption() {
  const { client } = useFHEVMContext();
  return useEncrypt(client);
}
