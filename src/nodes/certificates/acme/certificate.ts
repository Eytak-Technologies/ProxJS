import type { ProxmoxAuth } from '../../../types/common';
import type { 
  AcmeCertificateOrderInput, 
  AcmeCertificateRevokeInput,
  AcmeCertificateRenewInput
} from '../../../types/certificates';
import { fetchFromProxmox } from '../../../client/fetch';

/**
 * Order new ACME certificate
 */
export async function orderAcmeCertificate(
  auth: ProxmoxAuth,
  node: string,
  data: AcmeCertificateOrderInput
): Promise<{ status: string }> {
  return fetchFromProxmox<{ status: string }>(
    auth, 
    `/nodes/${node}/certificates/acme/certificate`, 
    'POST',
    data
  );
}

/**
 * Revoke existing ACME certificate
 */
export async function revokeAcmeCertificate(
  auth: ProxmoxAuth,
  node: string,
  data: AcmeCertificateRevokeInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/certificates/acme/certificate`, 
    'DELETE',
    data
  );
}

/**
 * Renew existing ACME certificate
 */
export async function renewAcmeCertificate(
  auth: ProxmoxAuth,
  node: string,
  data?: AcmeCertificateRenewInput
): Promise<{ status: string }> {
  return fetchFromProxmox<{ status: string }>(
    auth, 
    `/nodes/${node}/certificates/acme/certificate/renew`, 
    'PUT',
    data
  );
} 