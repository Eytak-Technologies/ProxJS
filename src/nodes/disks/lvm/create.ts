import type { ProxmoxAuth } from '../../../types/common';
import type { CreateLVMInput } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createLVM(
  auth: ProxmoxAuth,
  node: string,
  input: CreateLVMInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/lvm`, 
    'POST',
    input
  );
} 