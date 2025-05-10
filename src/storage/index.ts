import type { ProxmoxAuth } from '../types/common';
import type { StorageIndexEntry, StorageType } from '../types/storage';
import { fetchFromProxmox } from '../client/fetch';

export async function listStorages(
  auth: ProxmoxAuth,
  type?: StorageType
): Promise<StorageIndexEntry[]> {
  const queryParams = type ? `?type=${type}` : '';
  return fetchFromProxmox<StorageIndexEntry[]>(auth, `/storage${queryParams}`, 'GET');
} 