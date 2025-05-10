import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function startCeph(
  auth: ProxmoxAuth,
  node: string,
  service?: string
): Promise<void> {
  const queryParams = service ? `?service=${service}` : '';
  
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/start${queryParams}`,
    'POST'
  );
} 