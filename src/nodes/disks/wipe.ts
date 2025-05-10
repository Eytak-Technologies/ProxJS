import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function wipeDisk(
  auth: ProxmoxAuth,
  node: string,
  disk: string
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/wipedisk`, 
    'PUT',
    { disk }
  );
} 