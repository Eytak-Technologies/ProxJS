import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephConfigRaw(
  auth: ProxmoxAuth,
  node: string
): Promise<string> {
  return fetchFromProxmox<string>(auth, `/nodes/${node}/ceph/cfg/raw`, 'GET');
} 