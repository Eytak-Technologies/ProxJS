import type { ProxmoxAuth } from '../../../types/common';
import { fetchFromProxmox } from '../../../client/fetch';

/**
 * Get ACME directory information 
 */
export async function getAcmeDirectoryInfo(
  auth: ProxmoxAuth,
  node: string
): Promise<any> {
  return fetchFromProxmox<any>(auth, `/nodes/${node}/certificates/acme`, 'GET');
} 