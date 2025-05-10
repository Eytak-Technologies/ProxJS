import type { ProxmoxAuth } from '../../types/common';
import type { NodeCapabilities } from '../../types/capabilities';
import { fetchFromProxmox } from '../../client/fetch';

export async function listCapabilities(
  auth: ProxmoxAuth,
  node: string
): Promise<NodeCapabilities> {
  return fetchFromProxmox<NodeCapabilities>(auth, `/nodes/${node}/capabilities`, 'GET');
} 