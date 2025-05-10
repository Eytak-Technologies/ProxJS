import type { ProxmoxAuth } from '../../../types/common';
import type { FirewallRule } from '../../../types/firewall';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listFirewallRules(
  auth: ProxmoxAuth,
  node: string
): Promise<FirewallRule[]> {
  return fetchFromProxmox<FirewallRule[]>(
    auth,
    `/nodes/${node}/firewall/rules`,
    'GET'
  );
} 