import type { ProxmoxAuth } from '../../types/common';
import type { CertificateInfo } from '../../types/certificates';
import { fetchFromProxmox } from '../../client/fetch';

/**
 * Get list of certificates from a specific node
 */
export async function listCertificates(
  auth: ProxmoxAuth,
  node: string
): Promise<CertificateInfo[]> {
  return fetchFromProxmox<CertificateInfo[]>(auth, `/nodes/${node}/certificates`, 'GET');
} 