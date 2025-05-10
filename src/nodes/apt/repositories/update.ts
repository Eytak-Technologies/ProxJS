import type { ProxmoxAuth } from '../../../types/common';
import type { AptRepositoryUpdate } from '../../../types/apt';
import { fetchFromProxmox } from '../../../client/fetch';

export async function updateAptRepository(
  auth: ProxmoxAuth,
  node: string,
  data: AptRepositoryUpdate
): Promise<void> {
  return fetchFromProxmox<void>(auth, `/nodes/${node}/apt/repositories`, 'POST', data);
} 