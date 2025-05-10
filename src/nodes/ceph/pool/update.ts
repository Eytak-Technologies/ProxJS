import type { ProxmoxAuth } from '../../../types/common';
import type { CephPoolUpdateInput, CephPoolDetails } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function updateCephPool(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  input: CephPoolUpdateInput
): Promise<CephPoolDetails> {
  return fetchFromProxmox<CephPoolDetails>(
    auth,
    `/nodes/${node}/ceph/pool/${name}`,
    'PUT',
    input
  );
} 