import type { ProxmoxAuth } from '../../types/common';
import type { DiskListItem } from '../../types/disks';
import { fetchFromProxmox } from '../../client/fetch';

export async function listDisks(
  auth: ProxmoxAuth,
  node: string,
  options?: { 
    include_partitions?: boolean; 
    skipsmart?: boolean; 
    type?: "unused" | "journal_disks" 
  }
): Promise<DiskListItem[]> {
  const params = new URLSearchParams();
  
  if (options?.include_partitions) {
    params.append('include-partitions', options.include_partitions.toString());
  }
  
  if (options?.skipsmart) {
    params.append('skipsmart', options.skipsmart.toString());
  }
  
  if (options?.type) {
    params.append('type', options.type);
  }
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  return fetchFromProxmox<DiskListItem[]>(
    auth, 
    `/nodes/${node}/disks/list${queryString}`, 
    'GET'
  );
} 