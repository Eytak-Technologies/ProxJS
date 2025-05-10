import type { ProxmoxAuth } from '../types/common';
import type { DeleteStorageResponse } from '../types/storage';
import { fetchFromProxmox } from '../client/fetch';

export async function deleteStorage(
  auth: ProxmoxAuth,
  storageId: string
): Promise<DeleteStorageResponse> {
  return fetchFromProxmox<DeleteStorageResponse>(auth, `/storage/${storageId}`, 'DELETE');
} 