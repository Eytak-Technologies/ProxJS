import type { ProxmoxAuth } from '../types/common';
import type { CreateStorageInput, CreateStorageResponse } from '../types/storage';
import { fetchFromProxmox } from '../client/fetch';

export async function createStorage(
  auth: ProxmoxAuth,
  data: CreateStorageInput
): Promise<CreateStorageResponse> {
  return fetchFromProxmox<CreateStorageResponse>(auth, '/storage', 'POST', data);
} 