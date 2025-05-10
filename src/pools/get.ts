import type { ProxmoxAuth } from '../types/common';
import type { PoolDetails } from '../types/pools';
import { fetchFromProxmox } from '../client/fetch';

export async function getPool(
  auth: ProxmoxAuth,
  poolid: string
): Promise<PoolDetails> {
  return fetchFromProxmox<PoolDetails>(auth, `/pools?poolid=${poolid}`, 'GET');
} 