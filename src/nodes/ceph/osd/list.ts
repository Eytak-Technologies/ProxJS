import type { ProxmoxAuth } from '../../../types/common';
import type { CephOSDTree } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listCephOSD(
  auth: ProxmoxAuth,
  node: string
): Promise<CephOSDTree[]> {
  return fetchFromProxmox<CephOSDTree[]>(auth, `/nodes/${node}/ceph/osd`, 'GET');
} 