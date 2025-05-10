import type { ProxmoxAuth } from '../types/common';
import { fetchFromProxmox } from '../client/fetch';

type DeletePoolResponse = {
  success: boolean;
};

export async function deletePool(
  auth: ProxmoxAuth,
  poolid: string
): Promise<DeletePoolResponse> {
  return fetchFromProxmox<DeletePoolResponse>(auth, `/pools/${poolid}`, 'DELETE');
} 