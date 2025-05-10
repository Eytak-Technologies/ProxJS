import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

export async function deleteCephMon(
  auth: ProxmoxAuth,
  node: string,
  monid: string
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/mon/${monid}`,
    'DELETE'
  );
} 