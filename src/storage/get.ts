import type { ProxmoxAuth } from '../types/common';
import type { GetStorageResponse } from '../types/storage';
import { fetchFromProxmox } from '../client/fetch';

export async function getStorage(
  auth: ProxmoxAuth,
  storageId: string
): Promise<GetStorageResponse> {
  return fetchFromProxmox<GetStorageResponse>(auth, `/storage/${storageId}`, 'GET');
} 