import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

type CreateCephMonOptions = {
  mon_address?: string;
};

export async function createCephMon(
  auth: ProxmoxAuth,
  node: string,
  monid: string,
  options?: CreateCephMonOptions
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/mon/${monid}`,
    'POST',
    options
  );
} 