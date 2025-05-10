import type { ProxmoxAuth } from '../../types/common';
import type { AptPackageVersionInfo } from '../../types/apt';
import { fetchFromProxmox } from '../../client/fetch';

export async function getAptVersions(
  auth: ProxmoxAuth,
  node: string
): Promise<Record<string, AptPackageVersionInfo>> {
  return fetchFromProxmox<Record<string, AptPackageVersionInfo>>(auth, `/nodes/${node}/apt/versions`, 'GET');
} 