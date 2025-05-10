import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function scrubCephOSD(
  auth: ProxmoxAuth,
  node: string,
  osdid: number,
  deep?: boolean
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/osd/${osdid}/scrub`,
    'POST',
    deep ? { deep: 1 } : undefined
  );
} 