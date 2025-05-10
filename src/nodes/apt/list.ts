import type { ProxmoxAuth } from '../../types/common';
import type { AptDirectoryEntry } from '../../types/apt';
import { fetchFromProxmox } from '../../client/fetch';

export async function listApt(
  auth: ProxmoxAuth,
  node: string
): Promise<AptDirectoryEntry[]> {
  return fetchFromProxmox<AptDirectoryEntry[]>(auth, `/nodes/${node}/apt`, 'GET');
} 