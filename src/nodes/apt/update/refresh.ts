import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

type AptUpdateRefreshOptions = {
  notify?: boolean;
  quiet?: boolean;
};

export async function refreshAptUpdates(
  auth: ProxmoxAuth,
  node: string,
  options?: AptUpdateRefreshOptions
): Promise<void> {
  return fetchFromProxmox<void>(auth, `/nodes/${node}/apt/update`, 'POST', options);
} 