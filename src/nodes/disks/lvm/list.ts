import type { ProxmoxAuth } from '../../../types/common';
import type { LVMGroupInfo } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listLVM(
  auth: ProxmoxAuth,
  node: string
): Promise<LVMGroupInfo[]> {
  return fetchFromProxmox<LVMGroupInfo[]>(
    auth, 
    `/nodes/${node}/disks/lvm`, 
    'GET'
  );
} 