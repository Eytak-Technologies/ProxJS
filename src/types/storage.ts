export type StorageType =
  | "btrfs" | "cephfs" | "cifs" | "dir" | "esxi"
  | "glusterfs" | "iscsi" | "iscsidirect" | "lvm"
  | "lvmthin" | "nfs" | "pbs" | "rbd"
  | "zfs" | "zfspool";

export type StorageIndexEntry = {
  storage: string;
  type: StorageType;
  // Additional fields based on API structure
};

export type CreateStorageInput = {
  storage: string;
  type: StorageType;
  authsupported?: string;
  base?: string;
  blocksize?: string;
  bwlimit?: string;
  comstar_hg?: string;
  comstar_tg?: string;
  content?: string;
  content_dirs?: string;
  create_base_path?: boolean;
  create_subdirs?: boolean;
  data_pool?: string;
  datastore?: string;
  disable?: boolean;
  domain?: string;
  encryption_key?: string;
  export?: string;
  fingerprint?: string;
  format?: "raw" | "qcow2" | "subvol" | "vmdk";
  fs_name?: string;
  fuse?: boolean;
  is_mountpoint?: string;
  iscsiprovider?: string;
  keyring?: string;
  krbd?: boolean;
  lio_tpg?: string;
  master_pubkey?: string;
  max_protected_backups?: number;
  maxfiles?: number;
  mkdir?: boolean;
  monhost?: string;
  mountpoint?: string;
  namespace?: string;
  nocow?: boolean;
  nodes?: string;
  nowritecache?: boolean;
  options?: string;
  password?: string;
  path?: string;
  pool?: string;
  port?: number;
  portal?: string;
  preallocation?: "off" | "metadata" | "falloc" | "full";
  prune_backups?: string;
  saferemove?: boolean;
  saferemove_throughput?: string;
  server?: string;
  server2?: string;
  share?: string;
  shared?: boolean;
  skip_cert_verification?: boolean;
  smbversion?: "default" | "2.0" | "2.1" | "3" | "3.0" | "3.11";
  sparse?: boolean;
  subdir?: string;
  tagged_only?: boolean;
  target?: string;
  thinpool?: string;
  transport?: "tcp" | "rdma" | "unix";
  username?: string;
  vgname?: string;
  volume?: string;
};

export type CreateStorageResponse = {
  storage: string;
  type: StorageType;
  config?: Record<string, any>;
};

export type UpdateStorageInput = {
  blocksize?: string;
  bwlimit?: string;
  comstar_hg?: string;
  comstar_tg?: string;
  content?: string;
  content_dirs?: string;
  create_base_path?: boolean;
  create_subdirs?: boolean;
  data_pool?: string;
  delete?: string;
  digest?: string;
  disable?: boolean;
  domain?: string;
  encryption_key?: string;
  fingerprint?: string;
  format?: "raw" | "qcow2" | "subvol" | "vmdk";
  fs_name?: string;
  fuse?: boolean;
  is_mountpoint?: string;
  keyring?: string;
  krbd?: boolean;
  lio_tpg?: string;
  master_pubkey?: string;
  max_protected_backups?: number;
  maxfiles?: number;
  mkdir?: boolean;
  monhost?: string;
  mountpoint?: string;
  namespace?: string;
  nocow?: boolean;
  nodes?: string;
  nowritecache?: boolean;
  options?: string;
  password?: string;
  path?: string;
  pool?: string;
  port?: number;
  portal?: string;
  preallocation?: "off" | "metadata" | "falloc" | "full";
  prune_backups?: string;
  saferemove?: boolean;
  saferemove_throughput?: string;
  server?: string;
  server2?: string;
  shared?: boolean;
  skip_cert_verification?: boolean;
  smbversion?: "default" | "2.0" | "2.1" | "3" | "3.0" | "3.11";
  sparse?: boolean;
  subdir?: string;
  tagged_only?: boolean;
  target?: string;
  thinpool?: string;
  transport?: "tcp" | "rdma" | "unix";
  username?: string;
  vgname?: string;
  volume?: string;
};

export type GetStorageResponse = {
  storage: string;
  type: StorageType;
  // Other fields are optional and vary by backend
  [key: string]: any;
};

export type DeleteStorageResponse = {
  success: boolean;
}; 