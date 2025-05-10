import type { ProxmoxAuth } from '../../../types/common';
import type { FirewallRule } from '../../../types/firewall';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getFirewallRule(
  auth: ProxmoxAuth,
  node: string,
  pos: number
): Promise<FirewallRule> {
  return fetchFromProxmox<FirewallRule>(
    auth,
    `/nodes/${node}/firewall/rules/${pos}`,
    'GET'
  );
} 