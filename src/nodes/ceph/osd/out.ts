import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function outCephOSD(
  auth: ProxmoxAuth,
  node: string,
  osdid: number
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/osd/${osdid}/out`,
    'POST'
  );
} 