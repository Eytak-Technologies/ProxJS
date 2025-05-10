import type { ProxmoxAuth } from '../../../types/common';
import type { CreateZFSInput } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createZFS(
  auth: ProxmoxAuth,
  node: string,
  input: CreateZFSInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/zfs`, 
    'POST',
    input
  );
} 