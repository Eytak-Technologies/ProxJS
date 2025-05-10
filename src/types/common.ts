export type ProxmoxAuth = {
  host: string; // Example: https://your-node:8006
  ticket: string; // Value for the PVEAuthCookie
  csrfToken: string; // Value for CSRFPreventionToken
}; 