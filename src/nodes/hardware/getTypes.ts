import type { ProxmoxAuth } from '../../types/common';
import type { HardwareType } from '../../types/hardware';
import { fetchFromProxmox } from '../../client/fetch';

export async function getHardwareTypes(
  auth: ProxmoxAuth,
  node: string
): Promise<HardwareType[]> {
  return fetchFromProxmox<HardwareType[]>(
    auth,
    `/nodes/${node}/hardware`,
    'GET'
  );
} 