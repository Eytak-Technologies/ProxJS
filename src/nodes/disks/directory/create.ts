import type { ProxmoxAuth } from '../../../types/common';
import type { CreateDirectoryInput } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createDirectory(
  auth: ProxmoxAuth,
  node: string,
  input: CreateDirectoryInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/directory`, 
    'POST',
    input
  );
} 