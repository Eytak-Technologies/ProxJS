import type { ProxmoxAuth } from '../../../types/common';
import type { AptRepositoriesInfo } from '../../../types/apt';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getAptRepositories(
  auth: ProxmoxAuth,
  node: string
): Promise<AptRepositoriesInfo> {
  return fetchFromProxmox<AptRepositoriesInfo>(auth, `/nodes/${node}/apt/repositories`, 'GET');
} 