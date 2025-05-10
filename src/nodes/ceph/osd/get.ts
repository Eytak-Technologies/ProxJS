import type { ProxmoxAuth } from '../../../types/common';
import type { CephOSDInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getCephOSD(
  auth: ProxmoxAuth,
  node: string,
  osdid: number
): Promise<CephOSDInfo> {
  return fetchFromProxmox<CephOSDInfo>(auth, `/nodes/${node}/ceph/osd/${osdid}`, 'GET');
} 