import type { ProxmoxAuth } from '../types/common';
import type { UpdatePoolInput, PoolDetails } from '../types/pools';
import { fetchFromProxmox } from '../client/fetch';

export async function updatePool(
  auth: ProxmoxAuth,
  poolid: string,
  data: UpdatePoolInput
): Promise<PoolDetails> {
  const updateData = { ...data, poolid };
  return fetchFromProxmox<PoolDetails>(auth, '/pools', 'PUT', updateData);
} 