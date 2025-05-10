import type { ProxmoxAuth } from '../types/common';
import { fetchFromProxmox } from '../client/fetch';

export type VersionInfo = {
  release: string;
  repoid: string;
  version: string;
  console?: "applet" | "vv" | "html5" | "xtermjs";
};

export async function getVersion(auth: ProxmoxAuth): Promise<VersionInfo> {
  return fetchFromProxmox<VersionInfo>(auth, '/version', 'GET');
} 