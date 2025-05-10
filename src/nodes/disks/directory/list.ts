import type { ProxmoxAuth } from '../../../types/common';
import type { DirectoryMountInfo } from '../../../types/disks';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listDirectories(
  auth: ProxmoxAuth,
  node: string
): Promise<DirectoryMountInfo[]> {
  return fetchFromProxmox<DirectoryMountInfo[]>(
    auth, 
    `/nodes/${node}/disks/directory`, 
    'GET'
  );
} 