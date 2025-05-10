import type { ProxmoxAuth } from '../../../types/common';
import type { CephMGRInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listCephMGR(
  auth: ProxmoxAuth,
  node: string
): Promise<CephMGRInfo[]> {
  return fetchFromProxmox<CephMGRInfo[]>(auth, `/nodes/${node}/ceph/mgr`, 'GET');
} 