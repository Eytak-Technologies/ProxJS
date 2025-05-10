import type { ProxmoxAuth } from '../../../types/common';
import type { CephMonInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listCephMon(
  auth: ProxmoxAuth,
  node: string
): Promise<CephMonInfo[]> {
  return fetchFromProxmox<CephMonInfo[]>(auth, `/nodes/${node}/ceph/mon`, 'GET');
} 