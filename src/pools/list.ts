import type { ProxmoxAuth } from '../types/common';
import type { PoolSummary } from '../types/pools';
import { fetchFromProxmox } from '../client/fetch';

type ListPoolsOptions = {
  type?: "qemu" | "lxc" | "storage";
};

export async function listPools(
  auth: ProxmoxAuth,
  options?: ListPoolsOptions
): Promise<PoolSummary[]> {
  const queryParams = options?.type ? `?type=${options.type}` : '';
  return fetchFromProxmox<PoolSummary[]>(auth, `/pools${queryParams}`, 'GET');
} 