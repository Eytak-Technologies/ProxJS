import type { ProxmoxAuth } from '../../types/common';
import type { CephLogLine } from '../../types/ceph';
import { fetchFromProxmox } from '../../client/fetch';

type GetLogOptions = {
  limit?: number;
  start?: number;
};

export async function getLog(
  auth: ProxmoxAuth,
  node: string,
  options?: GetLogOptions
): Promise<CephLogLine[]> {
  const queryParams = new URLSearchParams();
  
  if (options?.limit !== undefined) {
    queryParams.append('limit', options.limit.toString());
  }
  
  if (options?.start !== undefined) {
    queryParams.append('start', options.start.toString());
  }
  
  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  
  return fetchFromProxmox<CephLogLine[]>(
    auth,
    `/nodes/${node}/ceph/log${queryString}`,
    'GET'
  );
} 