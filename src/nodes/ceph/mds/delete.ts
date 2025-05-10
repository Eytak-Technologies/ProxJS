import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function deleteCephMDS(
  auth: ProxmoxAuth,
  node: string,
  name: string
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/mds/${name}`,
    'DELETE'
  );
} 