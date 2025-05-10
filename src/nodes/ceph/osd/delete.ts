import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function deleteCephOSD(
  auth: ProxmoxAuth,
  node: string,
  osdid: number,
  cleanup?: boolean
): Promise<void> {
  const params = cleanup ? `?cleanup=1` : '';
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/osd/${osdid}${params}`,
    'DELETE'
  );
} 