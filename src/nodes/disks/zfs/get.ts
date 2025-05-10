import type { ProxmoxAuth } from '../../../types/common';
import type { ZpoolDetails } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getZFS(
  auth: ProxmoxAuth,
  node: string,
  name: string
): Promise<ZpoolDetails> {
  return fetchFromProxmox<ZpoolDetails>(
    auth, 
    `/nodes/${node}/disks/zfs/${name}`, 
    'GET'
  );
} 