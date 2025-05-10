import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function getCephStatus(
  auth: ProxmoxAuth,
  node: string
): Promise<Record<string, any>> {
  return fetchFromProxmox<Record<string, any>>(
    auth,
    `/nodes/${node}/ceph/status`,
    'GET'
  );
} 