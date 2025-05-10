import type { ProxmoxAuth } from '../../../types/common';
import type { QemuMachineType } from '../../../types/capabilities';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listQemuMachines(
  auth: ProxmoxAuth,
  node: string
): Promise<QemuMachineType[]> {
  return fetchFromProxmox<QemuMachineType[]>(auth, `/nodes/${node}/capabilities/qemu/machines`, 'GET');
} 