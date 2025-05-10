import type { ProxmoxAuth } from '../../types/common';
import type { CephInitInput } from '../../types/ceph';
import { fetchFromProxmox } from '../../client/fetch';

export async function initCeph(
  auth: ProxmoxAuth,
  node: string,
  input?: CephInitInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/init`,
    'POST',
    input
  );
} 