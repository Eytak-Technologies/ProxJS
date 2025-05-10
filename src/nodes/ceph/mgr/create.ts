import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createCephMGR(
  auth: ProxmoxAuth,
  node: string,
  id: string
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/mgr/${id}`,
    'POST'
  );
} 