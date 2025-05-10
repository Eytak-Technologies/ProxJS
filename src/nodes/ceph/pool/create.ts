import type { ProxmoxAuth } from '../../../types/common';
import type { CephPoolCreateInput, CephPoolDetails } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createCephPool(
  auth: ProxmoxAuth,
  node: string,
  input: CephPoolCreateInput
): Promise<CephPoolDetails> {
  return fetchFromProxmox<CephPoolDetails>(
    auth,
    `/nodes/${node}/ceph/pool`,
    'POST',
    input
  );
} 