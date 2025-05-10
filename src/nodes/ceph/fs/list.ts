import type { ProxmoxAuth } from '../../../types/common';
import type { CephFSInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listCephFS(
  auth: ProxmoxAuth,
  node: string
): Promise<CephFSInfo[]> {
  return fetchFromProxmox<CephFSInfo[]>(auth, `/nodes/${node}/ceph/fs`, 'GET');
} 