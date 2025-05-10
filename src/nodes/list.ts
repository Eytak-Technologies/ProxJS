import type { ProxmoxAuth } from '../types/common';
import type { NodeSummary } from '../types/nodes';
import { fetchFromProxmox } from '../client/fetch';

export async function listNodes(
  auth: ProxmoxAuth
): Promise<NodeSummary[]> {
  return fetchFromProxmox<NodeSummary[]>(auth, '/nodes', 'GET');
} 