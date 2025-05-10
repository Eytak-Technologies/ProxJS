import type { ProxmoxAuth } from '../../types/common';
import type { QemuCapabilities } from '../../types/capabilities';
import { fetchFromProxmox } from '../../client/fetch';

export async function getQemuCapabilities(
  auth: ProxmoxAuth,
  node: string
): Promise<QemuCapabilities> {
  return fetchFromProxmox<QemuCapabilities>(auth, `/nodes/${node}/capabilities/qemu`, 'GET');
} 