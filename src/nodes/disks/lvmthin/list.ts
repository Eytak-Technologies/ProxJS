import type { ProxmoxAuth } from '../../../types/common';
import type { LVMThinInfo } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listLVMThin(
  auth: ProxmoxAuth,
  node: string
): Promise<LVMThinInfo[]> {
  return fetchFromProxmox<LVMThinInfo[]>(
    auth, 
    `/nodes/${node}/disks/lvmthin`, 
    'GET'
  );
} 