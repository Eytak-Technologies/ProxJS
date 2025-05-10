import type { ProxmoxAuth } from '../../types/common';
import { fetchFromProxmox } from '../../client/fetch';

export async function getAptChangelog(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  version?: string
): Promise<string> {
  const params = new URLSearchParams({ name });
  if (version) {
    params.append('version', version);
  }
  
  return fetchFromProxmox<string>(auth, `/nodes/${node}/apt/changelog?${params.toString()}`, 'GET');
} 