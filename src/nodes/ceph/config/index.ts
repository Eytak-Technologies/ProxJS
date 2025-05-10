import type { ProxmoxAuth } from '../../../types/common';
import type { CephCfgDirectoryInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephConfigIndex(
  auth: ProxmoxAuth,
  node: string
): Promise<CephCfgDirectoryInfo> {
  return fetchFromProxmox<CephCfgDirectoryInfo>(auth, `/nodes/${node}/ceph/cfg`, 'GET');
} 