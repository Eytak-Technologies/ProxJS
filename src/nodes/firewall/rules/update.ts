import type { ProxmoxAuth } from '../../../types/common';
import type { UpdateFirewallRuleInput } from '../../../types/firewall';
import { fetchFromProxmox } from '../../../client/fetch';

export async function updateFirewallRule(
  auth: ProxmoxAuth,
  node: string,
  pos: number,
  input: UpdateFirewallRuleInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/firewall/rules/${pos}`,
    'PUT',
    input
  );
} 