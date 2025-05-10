export type DiskListItem = {
  devpath: string;
  size: number;
  osdid?: number;
  used?: string;
  model?: string;
  vendor?: string;
  health?: string;
  gpt?: boolean;
  mounted?: boolean;
  [key: string]: any;
};

export type DiskSmartInfo = {
  health: string;
  attributes?: any[];
  text?: string;
  type?: string;
};

export type DirectoryMountInfo = {
  device: string;
  path: string;
  type: string;
  options: string;
  unitfile: string;
};

export type CreateDirectoryInput = {
  device: string;
  name: string;
  add_storage?: boolean;
  filesystem?: "ext4" | "xfs";
};

export type CreateLVMInput = {
  device: string;
  name: string;
  add_storage?: boolean;
};

export type LVMGroupInfo = {
  name: string;
  children: any[];
  leaf: boolean;
};

export type LVMThinInfo = {
  lv: string;
  lv_size: number;
  metadata_size: number;
  metadata_used: number;
  used: number;
  vg: string;
};

export type CreateLVMThinInput = {
  device: string;
  name: string;
  add_storage?: boolean;
};

export type ZpoolInfo = {
  name: string;
  alloc: number;
  dedup: number;
  frag: number;
  free: number;
  health: string;
  size: number;
};

export type ZpoolDetails = {
  name: string;
  state: string;
  errors: string;
  children: any[];
  status?: string;
  scan?: string;
  action?: string;
};

export type CreateZFSInput = {
  name: string;
  devices: string;
  raidlevel: "single" | "mirror" | "raid10" | "raidz" | "raidz2" | "raidz3" | "draid" | "draid2" | "draid3";
  add_storage?: boolean;
  ashift?: number;
  compression?: "on" | "off" | "gzip" | "lz4" | "lzjb" | "zle" | "zstd";
  draid_config?: string;
}; 