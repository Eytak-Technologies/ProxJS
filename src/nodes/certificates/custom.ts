import type { ProxmoxAuth } from '../../types/common';
import type { CustomCertUploadInput } from '../../types/certificates';
import { fetchFromProxmox } from '../../client/fetch';

/**
 * Upload custom certificate chain and key
 */
export async function uploadCustomCertificate(
  auth: ProxmoxAuth,
  node: string,
  data: CustomCertUploadInput
): Promise<{ certificate: string }> {
  return fetchFromProxmox<{ certificate: string }>(
    auth, 
    `/nodes/${node}/certificates/custom`, 
    'POST',
    data
  );
} 