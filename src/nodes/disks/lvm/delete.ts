import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function deleteLVM(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  options?: { cleanup_config?: boolean; cleanup_disks?: boolean }
): Promise<void> {
  const params = new URLSearchParams();
  
  if (options?.cleanup_config !== undefined) {
    params.append('cleanup-config', options.cleanup_config.toString());
  }
  
  if (options?.cleanup_disks !== undefined) {
    params.append('cleanup-disks', options.cleanup_disks.toString());
  }
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/lvm/${name}${queryString}`, 
    'DELETE'
  );
} 