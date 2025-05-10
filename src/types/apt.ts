export type AptDirectoryEntry = {
  id: string;
  [key: string]: any;
};

export type AptRepositoriesInfo = {
  digest: string;
  errors: any[];
  files: any[];
  infos: any[];
  standard_repos: any[];
};

export type AptRepositoryUpdate = {
  index: number;
  path: string;
  digest?: string;
  enabled?: boolean;
};

export type AptStandardRepoInput = {
  handle: string;
  digest?: string;
};

export type AptUpdateInfo = {
  package: string;
  version: string;
  oldversion?: string;
  description?: string;
};

export type AptPackageVersionInfo = {
  version: string;
  description?: string;
  architecture?: string;
  origin?: string;
  [key: string]: any;
}; 