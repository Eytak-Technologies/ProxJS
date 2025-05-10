import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephConfigValues(
  auth: ProxmoxAuth,
  node: string,
  keys: string
): Promise<Record<string, string>> {
  return fetchFromProxmox<Record<string, string>>(
    auth, 
    `/nodes/${node}/ceph/cfg/value?config-keys=${encodeURIComponent(keys)}`, 
    'GET'
  );
} 