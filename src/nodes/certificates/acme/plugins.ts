import type { ProxmoxAuth } from '../../../types/common';
import type { 
  AcmePluginInfo, 
  AcmePluginCreateInput, 
  AcmePluginUpdateInput 
} from '../../../types/certificates';
import { fetchFromProxmox } from '../../../client/fetch';

/**
 * Get ACME plugin information
 */
export async function getAcmePlugins(
  auth: ProxmoxAuth,
  node: string
): Promise<AcmePluginInfo[]> {
  return fetchFromProxmox<AcmePluginInfo[]>(auth, `/nodes/${node}/certificates/acme/plugins`, 'GET');
}

/**
 * Add ACME plugin configuration
 */
export async function addAcmePlugin(
  auth: ProxmoxAuth,
  node: string,
  id: string,
  data: AcmePluginCreateInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/certificates/acme/plugins/${id}`, 
    'POST',
    data
  );
}

/**
 * Update ACME plugin configuration
 */
export async function updateAcmePlugin(
  auth: ProxmoxAuth,
  node: string,
  id: string,
  data: AcmePluginUpdateInput
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/certificates/acme/plugins/${id}`, 
    'PUT',
    data
  );
}

/**
 * Delete ACME plugin configuration
 */
export async function deleteAcmePlugin(
  auth: ProxmoxAuth,
  node: string,
  id: string
): Promise<void> {
  return fetchFromProxmox<void>(
    auth, 
    `/nodes/${node}/certificates/acme/plugins/${id}`, 
    'DELETE'
  );
} 