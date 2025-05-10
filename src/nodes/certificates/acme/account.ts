import type { ProxmoxAuth } from '../../../types/common';
import type { AcmeAccountInfo, AcmeAccountCreateInput } from '../../../types/certificates';
import { fetchFromProxmox } from '../../../client/fetch';

/**
 * List ACME account 
 */
export async function listAcmeAccount(
  auth: ProxmoxAuth,
  node: string
): Promise<AcmeAccountInfo[]> {
  return fetchFromProxmox<AcmeAccountInfo[]>(auth, `/nodes/${node}/certificates/acme/account`, 'GET');
}

/**
 * Register new ACME account
 */
export async function registerAcmeAccount(
  auth: ProxmoxAuth,
  node: string,
  data: AcmeAccountCreateInput
): Promise<AcmeAccountInfo> {
  return fetchFromProxmox<AcmeAccountInfo>(
    auth, 
    `/nodes/${node}/certificates/acme/account`, 
    'POST',
    data
  );
}

/**
 * Deactivate ACME account
 */
export async function deactivateAcmeAccount(
  auth: ProxmoxAuth,
  node: string,
  accountName: string
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/certificates/acme/account/${accountName}`, 
    'DELETE'
  );
} 