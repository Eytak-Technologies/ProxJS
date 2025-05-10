import type { ProxmoxAuth } from '../../../types/common';
import type { CephOSDMetadata } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getMetadataCephOSD(
  auth: ProxmoxAuth,
  node: string,
  osdid: number
): Promise<CephOSDMetadata> {
  return fetchFromProxmox<CephOSDMetadata>(
    auth,
    `/nodes/${node}/ceph/osd/${osdid}/metadata`,
    'GET'
  );
} 