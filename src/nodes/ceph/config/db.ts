import type { ProxmoxAuth } from '../../../types/common';
import type { CephConfigDBEntry } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephConfigDB(
  auth: ProxmoxAuth,
  node: string
): Promise<CephConfigDBEntry[]> {
  return fetchFromProxmox<CephConfigDBEntry[]>(auth, `/nodes/${node}/ceph/cfg/db`, 'GET');
} 