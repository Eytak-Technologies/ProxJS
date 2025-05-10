import type { ProxmoxAuth } from '../../types/common';
import type { CephCrushRule } from '../../types/ceph';
import { fetchFromProxmox } from '../../client/fetch';

export async function getCephRules(
  auth: ProxmoxAuth,
  node: string
): Promise<CephCrushRule[]> {
  return fetchFromProxmox<CephCrushRule[]>(
    auth,
    `/nodes/${node}/ceph/rules`,
    'GET'
  );
} 