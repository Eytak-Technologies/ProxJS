import type { ProxmoxAuth } from '../../types/common';
import type { CmdSafetyInput, CmdSafetyResult } from '../../types/ceph';
import { fetchFromProxmox } from '../../client/fetch';

export async function checkCmdSafety(
  auth: ProxmoxAuth,
  node: string,
  input: CmdSafetyInput
): Promise<CmdSafetyResult> {
  const queryParams = new URLSearchParams({
    service: input.service,
    action: input.action,
    id: input.id
  });
  
  return fetchFromProxmox<CmdSafetyResult>(
    auth,
    `/nodes/${node}/ceph/cmd-safety?${queryParams.toString()}`,
    'GET'
  );
} 