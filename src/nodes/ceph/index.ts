import type { ProxmoxAuth } from '../../types/common';
import type { CephDirectoryInfo } from '../../types/ceph';
import { fetchFromProxmox } from '../../client/fetch';

export async function getCephIndex(
  auth: ProxmoxAuth,
  node: string
): Promise<CephDirectoryInfo> {
  return fetchFromProxmox<CephDirectoryInfo>(auth, `/nodes/${node}/ceph`, 'GET');
} 