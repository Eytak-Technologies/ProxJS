import type { ProxmoxAuth } from '../../../types/common';
import type { CreateLVMThinInput } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createLVMThin(
  auth: ProxmoxAuth,
  node: string,
  input: CreateLVMThinInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/lvmthin`, 
    'POST',
    input
  );
} 