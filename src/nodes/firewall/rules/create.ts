import type { ProxmoxAuth } from '../../../types/common';
import type { CreateFirewallRuleInput } from '../../../types/firewall';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createFirewallRule(
  auth: ProxmoxAuth,
  node: string,
  input: CreateFirewallRuleInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/firewall/rules`,
    'POST',
    input
  );
} 