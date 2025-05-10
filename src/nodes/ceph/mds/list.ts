import type { ProxmoxAuth } from '../../../types/common';
import type { CephMDSInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listCephMDS(
  auth: ProxmoxAuth,
  node: string
): Promise<CephMDSInfo[]> {
  return fetchFromProxmox<CephMDSInfo[]>(auth, `/nodes/${node}/ceph/mds`, 'GET');
} 