import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function initGpt(
  auth: ProxmoxAuth,
  node: string,
  disk: string,
  uuid?: string
): Promise<void> {
  const data: { disk: string; uuid?: string } = { disk };
  
  if (uuid) {
    data.uuid = uuid;
  }
  
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/disks/initgpt`, 
    'POST',
    data
  );
} 