import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function getCrushMap(
  auth: ProxmoxAuth,
  node: string
): Promise<string> {
  return fetchFromProxmox<string>(
    auth,
    `/nodes/${node}/ceph/crush`,
    'GET'
  );
} 