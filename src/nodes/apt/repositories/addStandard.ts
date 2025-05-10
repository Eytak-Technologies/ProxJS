import type { ProxmoxAuth } from '../../../types/common';
import type { AptStandardRepoInput } from '../../../types/apt';
import { fetchFromProxmox } from '../../../client/fetch';

export async function addStandardAptRepository(
  auth: ProxmoxAuth,
  node: string,
  data: AptStandardRepoInput
): Promise<void> {
  return fetchFromProxmox<void>(auth, `/nodes/${node}/apt/repositories`, 'PUT', data);
} 