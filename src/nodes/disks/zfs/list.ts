import type { ProxmoxAuth } from '../../../types/common';
import type { ZpoolInfo } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listZFS(
  auth: ProxmoxAuth,
  node: string
): Promise<ZpoolInfo[]> {
  return fetchFromProxmox<ZpoolInfo[]>(
    auth, 
    `/nodes/${node}/disks/zfs`, 
    'GET'
  );
} 