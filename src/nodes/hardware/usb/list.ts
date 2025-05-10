import type { ProxmoxAuth } from '../../../types/common';
import type { USBDevice } from '../../../types/hardware';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listUSBDevices(
  auth: ProxmoxAuth,
  node: string
): Promise<USBDevice[]> {
  return fetchFromProxmox<USBDevice[]>(
    auth,
    `/nodes/${node}/hardware/usb`,
    'GET'
  );
} 