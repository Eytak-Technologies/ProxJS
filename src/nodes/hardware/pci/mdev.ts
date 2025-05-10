import type { ProxmoxAuth } from '../../../types/common';
import type { MediatedDeviceType } from '../../../types/hardware';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getPCIMdevTypes(
  auth: ProxmoxAuth,
  node: string,
  id: string
): Promise<MediatedDeviceType[]> {
  return fetchFromProxmox<MediatedDeviceType[]>(
    auth,
    `/nodes/${node}/hardware/pci/${id}/mdev`,
    'GET'
  );
} 