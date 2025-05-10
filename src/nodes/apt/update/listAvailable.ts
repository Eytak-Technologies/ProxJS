import type { ProxmoxAuth } from '../../../types/common';
import type { AptUpdateInfo } from '../../../types/apt';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listAvailableAptUpdates(
  auth: ProxmoxAuth,
  node: string
): Promise<AptUpdateInfo[]> {
  return fetchFromProxmox<AptUpdateInfo[]>(auth, `/nodes/${node}/apt/update`, 'GET');
} 