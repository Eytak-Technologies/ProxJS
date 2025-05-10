import type { ProxmoxAuth } from '../../types/common';
import type { FirewallOptions } from '../../types/firewall';
import { fetchFromProxmox } from '../../client/fetch';

export async function getFirewallOptions(
  auth: ProxmoxAuth,
  node: string
): Promise<FirewallOptions> {
  return fetchFromProxmox<FirewallOptions>(
    auth,
    `/nodes/${node}/firewall/options`,
    'GET'
  );
} 