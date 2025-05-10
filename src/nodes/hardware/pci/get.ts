import type { ProxmoxAuth } from '../../../types/common';
import type { PCIMethodInfo } from '../../../types/hardware';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getPCIDevice(
  auth: ProxmoxAuth,
  node: string,
  id: string
): Promise<PCIMethodInfo[]> {
  return fetchFromProxmox<PCIMethodInfo[]>(
    auth,
    `/nodes/${node}/hardware/pci/${id}`,
    'GET'
  );
} 