import type { ProxmoxAuth } from '../../../types/common';
import type { CephPoolDeleteOptions } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function deleteCephPool(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  options?: CephPoolDeleteOptions
): Promise<void> {
  const queryParams = new URLSearchParams();
  
  if (options?.force) {
    queryParams.append('force', '1');
  }
  
  if (options?.remove_ecprofile) {
    queryParams.append('remove_ecprofile', '1');
  }
  
  if (options?.remove_storages) {
    queryParams.append('remove_storages', '1');
  }
  
  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/pool/${name}${queryString}`,
    'DELETE'
  );
} 