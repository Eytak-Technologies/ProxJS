import type { ProxmoxAuth } from '../types/common';

/**
 * Utility function to make API calls to Proxmox VE
 */
export async function fetchFromProxmox<T>(
  auth: ProxmoxAuth,
  path: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: unknown
): Promise<T> {
  const url = `${auth.host}/api2/json${path}`;
  
  const headers: Record<string, string> = {
    'Cookie': `PVEAuthCookie=${auth.ticket}`,
  };
  
  // Add CSRF token for non-GET requests
  if (method !== 'GET') {
    headers['CSRFPreventionToken'] = auth.csrfToken;
  }
  
  const options: RequestInit = {
    method,
    headers,
  };
  
  if (body && method !== 'GET') {
    headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(url, options);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(`Proxmox API error: ${JSON.stringify(errorData)}`);
  }
  
  const responseData = await response.json() as { data: T };
  return responseData.data;
} 