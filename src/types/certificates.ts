export type CustomCertUploadInput = {
  certificates: string;
  key?: string;
  force?: boolean;
  restart?: boolean;
};

export type CertificateInfo = {
  filename?: string;
  fingerprint?: string;
  issuer?: string;
  notafter?: number;
  notbefore?: number;
  pem?: string;
  public_key_bits?: number;
  public_key_type?: string;
  san?: string[];
  subject?: string;
};

export type AcmeAccountInfo = {
  account: string;
  directory?: string;
  location?: string;
  status?: string;
};

export type AcmeAccountCreateInput = {
  contact: string; // Email address to register with account
  directory?: string; // ACME directory URL
  tos_url?: string; // Terms of service URL
};

export type AcmeCertificateOrderInput = {
  domains: string; // Comma separated list of domains to request certificate for
  account?: string; // ACME account name
  force?: boolean; // Force certificate renewal/creation
  plugin?: string; // DNS plugin ID
};

export type AcmeCertificateRevokeInput = {
  certificate: string; // Certificate filename or fingerprint
  account?: string; // ACME account name
};

export type AcmeCertificateRenewInput = {
  force?: boolean; // Force certificate renewal
};

export type AcmePluginInfo = {
  id: string;
  type: string;
  api?: string;
  data?: string;
  validation_delay?: number;
};

export type AcmePluginCreateInput = {
  type: string; // DNS plugin type
  api?: string; // DNS API endpoint
  data?: string; // DNS plugin configuration data
  disable?: boolean; // Flag to disable the plugin
  validation_delay?: number; // Validation delay in seconds
};

export type AcmePluginUpdateInput = {
  api?: string; // DNS API endpoint
  data?: string; // DNS plugin configuration data
  delete?: string; // List of fields to delete
  disable?: boolean; // Flag to disable the plugin
  validation_delay?: number; // Validation delay in seconds
}; 