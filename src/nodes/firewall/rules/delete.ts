import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function deleteFirewallRule(
  auth: ProxmoxAuth,
  node: string,
  pos: number,
  digest?: string
): Promise<void> {
  const params = new URLSearchParams();
  
  if (digest) {
    params.append('digest', digest);
  }
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/firewall/rules/${pos}${queryString}`,
    'DELETE'
  );
} 