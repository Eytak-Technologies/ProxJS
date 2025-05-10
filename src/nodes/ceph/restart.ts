import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function restartCeph(
  auth: ProxmoxAuth,
  node: string,
  service?: string
): Promise<void> {
  const queryParams = service ? `?service=${service}` : '';
  
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/restart${queryParams}`,
    'POST'
  );
} 