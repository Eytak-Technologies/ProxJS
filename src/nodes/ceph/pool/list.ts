import type { ProxmoxAuth } from '../../../types/common';
import type { CephPoolSummary } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listCephPool(
  auth: ProxmoxAuth,
  node: string
): Promise<CephPoolSummary[]> {
  return fetchFromProxmox<CephPoolSummary[]>(auth, `/nodes/${node}/ceph/pool`, 'GET');
} 