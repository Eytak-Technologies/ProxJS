import type { ProxmoxAuth } from '../../../types/common';
import type { CephPoolDetails } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephPool(
  auth: ProxmoxAuth,
  node: string,
  name: string
): Promise<CephPoolDetails> {
  return fetchFromProxmox<CephPoolDetails>(auth, `/nodes/${node}/ceph/pool/${name}`, 'GET');
} 