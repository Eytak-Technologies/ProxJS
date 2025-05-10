import type { ProxmoxAuth } from '../../types/common';
import type { DiskSmartInfo } from '../../types/disks';
import { fetchFromProxmox } from '../../client/fetch';

export async function getDiskSmart(
  auth: ProxmoxAuth,
  node: string,
  disk: string,
  healthonly?: boolean
): Promise<DiskSmartInfo> {
  const params = new URLSearchParams();
  params.append('disk', disk);
  
  if (healthonly !== undefined) {
    params.append('healthonly', healthonly.toString());
  }
  
  return fetchFromProxmox<DiskSmartInfo>(
    auth, 
    `/nodes/${node}/disks/smart?${params.toString()}`, 
    'GET'
  );
} 