import type { ProxmoxAuth } from '../../types/common';
import type { FirewallLogLine } from '../../types/firewall';
import { fetchFromProxmox } from '../../client/fetch';

export async function getFirewallLog(
  auth: ProxmoxAuth,
  node: string,
  options?: { 
    limit?: number; 
    since?: number; 
    start?: number; 
    until?: number 
  }
): Promise<FirewallLogLine[]> {
  const params = new URLSearchParams();
  
  if (options?.limit !== undefined) {
    params.append('limit', options.limit.toString());
  }
  
  if (options?.since !== undefined) {
    params.append('since', options.since.toString());
  }
  
  if (options?.start !== undefined) {
    params.append('start', options.start.toString());
  }
  
  if (options?.until !== undefined) {
    params.append('until', options.until.toString());
  }
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  return fetchFromProxmox<FirewallLogLine[]>(
    auth,
    `/nodes/${node}/firewall/log${queryString}`,
    'GET'
  );
} 