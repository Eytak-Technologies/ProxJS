import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function getDisksIndex(
  auth: ProxmoxAuth,
  node: string
): Promise<any> {
  return fetchFromProxmox<any>(auth, `/nodes/${node}/disks`, 'GET');
} 