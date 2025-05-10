import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

type CreateCephMDSOptions = {
  hotstandby?: boolean;
};

export async function createCephMDS(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  options?: CreateCephMDSOptions
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/mds/${name}`,
    'POST',
    options
  );
} 