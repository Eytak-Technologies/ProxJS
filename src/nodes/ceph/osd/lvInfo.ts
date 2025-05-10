import type { ProxmoxAuth } from '../../../types/common';
import type { LVMVolumeInfo } from '../../../types/ceph';
import { fetchFromProxmox } from '../../../client/fetch';

export async function getLVInfoCephOSD(
  auth: ProxmoxAuth,
  node: string,
  osdid: number,
  type?: "block" | "db" | "wal"
): Promise<LVMVolumeInfo> {
  const params = type ? `?type=${type}` : '';
  return fetchFromProxmox<LVMVolumeInfo>(
    auth,
    `/nodes/${node}/ceph/osd/${osdid}/lv-info${params}`,
    'GET'
  );
} 