import type { ProxmoxAuth } from '../types/common';
import type { CreatePoolInput, PoolDetails } from '../types/pools';
import { fetchFromProxmox } from '../client/fetch';

export async function createPool(
  auth: ProxmoxAuth,
  data: CreatePoolInput
): Promise<PoolDetails> {
  return fetchFromProxmox<PoolDetails>(auth, '/pools', 'POST', data);
} 