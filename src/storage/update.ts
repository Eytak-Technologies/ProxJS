import type { ProxmoxAuth } from '../types/common';
import type { UpdateStorageInput } from '../types/storage';
import { fetchFromProxmox } from '../client/fetch';

export async function updateStorage(
  auth: ProxmoxAuth,
  storageId: string,
  updateData: UpdateStorageInput
): Promise<void> {
  return fetchFromProxmox<void>(auth, `/storage/${storageId}`, 'PUT', updateData);
} 