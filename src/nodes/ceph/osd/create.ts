import type { ProxmoxAuth } from '../../../types/common';
import type { OSDCreateOptions } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function createCephOSD(
  auth: ProxmoxAuth,
  node: string,
  device: string,
  options?: OSDCreateOptions
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/osd`,
    'POST',
    { dev: device, ...options }
  );
} 