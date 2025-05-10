import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

type CreateCephFSOptions = {
  add_storage?: boolean;
  pg_num?: number;
};

export async function createCephFS(
  auth: ProxmoxAuth,
  node: string,
  name: string,
  options?: CreateCephFSOptions
): Promise<void> {
  return fetchFromProxmox<void>(
    auth,
    `/nodes/${node}/ceph/fs/${name}`,
    'POST',
    options
  );
} 