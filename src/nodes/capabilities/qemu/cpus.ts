import type { ProxmoxAuth } from '../../../types/common';
import type { QemuCPUModel } from '../../../types/capabilities';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listQemuCpus(
  auth: ProxmoxAuth,
  node: string
): Promise<QemuCPUModel[]> {
  return fetchFromProxmox<QemuCPUModel[]>(auth, `/nodes/${node}/capabilities/qemu/cpu`, 'GET');
} 