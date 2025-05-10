import type { ProxmoxAuth } from '../../../types/common';
import type { CephPoolStatus } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephPoolStatus(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  verbose?: boolean
): Promise<CephPoolStatus> {
  const queryParam = verbose ? '?verbose=1' : '';
  return fetchFromProxmox<CephPoolStatus>(
    auth, 
    `/nodes/${node}/ceph/pool/${name}/status${queryParam}`, 
    'GET'
  );
} 