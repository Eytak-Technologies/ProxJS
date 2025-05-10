import type { ProxmoxAuth } from '../../../types/common';
import type { PCIDevice } from '../../../types/hardware';
import { fetchFromProxmox } from '../../../client/fetch';

export async function listPCIDevices(
  auth: ProxmoxAuth,
  node: string,
  options?: { 
    pci_class_blacklist?: string; 
    verbose?: boolean 
  }
): Promise<PCIDevice[]> {
  const params = new URLSearchParams();
  
  if (options?.pci_class_blacklist) {
    params.append('pci-class-blacklist', options.pci_class_blacklist);
  }
  
  if (options?.verbose !== undefined) {
    params.append('verbose', options.verbose.toString());
  }
  
  const queryString = params.toString() ? `?${params.toString()}` : '';
  
  return fetchFromProxmox<PCIDevice[]>(
    auth,
    `/nodes/${node}/hardware/pci${queryString}`,
    'GET'
  );
} 