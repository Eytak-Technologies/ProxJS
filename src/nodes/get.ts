import type { ProxmoxAuth } from '../types/common';
import type { NodeDetails } from '../types/nodes';
import { fetchFromProxmox } from '../client/fetch';

export async function getNode(
  auth: ProxmoxAuth,
  node: string
): Promise<NodeDetails> {
  return fetchFromProxmox<NodeDetails>(auth, `/nodes/${node}`, 'GET');
} 