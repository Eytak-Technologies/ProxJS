export type CephDirectoryInfo = {
  [key: string]: any;
};

export type CephCfgDirectoryInfo = {
  [key: string]: any;
};

export type CephConfigDBEntry = {
  can_update_at_runtime: boolean;
  level: string;
  mask: string;
  name: string;
  section: string;
  value: string;
};

export type CephFSInfo = {
  name: string;
  data_pool: string;
  metadata_pool: string;
};

export type CephMDSInfo = {
  name: string;
  state: string;
  addr?: string;
  host?: string;
  rank?: number;
  standby_replay?: boolean;
};

export type CephMGRInfo = {
  name: string;
  state: string;
  addr?: string;
  host?: string;
};

export type CephMonInfo = {
  name: string;
  state: string;
  addr?: string;
  ceph_version?: string;
  ceph_version_short?: string;
  direxists?: string;
  host?: boolean;
  quorum?: boolean;
  rank?: number;
  service?: number;
};

export type OSDCreateOptions = {
  db_dev?: string;
  db_dev_size?: number;
  wal_dev?: string;
  wal_dev_size?: number;
  encrypted?: boolean;
  osds_per_device?: number;
  crush_device_class?: string;
};

export type CephOSDTree = {
  id: number;
  name: string;
  type: string;
  [key: string]: any;
};

export type CephOSDInfo = {
  id: number;
  [key: string]: any;
};

export type LVMVolumeInfo = {
  creation_time: string;
  lv_name: string;
  lv_path: string;
  lv_size: number;
  lv_uuid: string;
  vg_name: string;
};

export type CephOSDMetadata = {
  devices: any[];
  osd: Record<string, any>;
};

export type CephPoolSummary = {
  pool: number;
  pool_name: string;
  type: "replicated" | "erasure" | "unknown";
  size: number;
  min_size: number;
  pg_num: number;
  crush_rule: number;
  crush_rule_name: string;
  percent_used: number;
  bytes_used: number;
  pg_num_final?: number;
  pg_num_min?: number;
  target_size?: number;
  target_size_ratio?: number;
  pg_autoscale_mode?: string;
  application_metadata?: Record<string, any>;
  autoscale_status?: Record<string, any>;
};

export type CephPoolCreateInput = {
  name: string;
  add_storages?: boolean;
  application?: "rbd" | "cephfs" | "rgw";
  crush_rule?: string;
  erasure_coding?: string;
  min_size?: number;
  pg_autoscale_mode?: "on" | "off" | "warn";
  pg_num?: number;
  pg_num_min?: number;
  size?: number;
  target_size?: string;
  target_size_ratio?: number;
};

export type CephPoolUpdateInput = {
  application?: "rbd" | "cephfs" | "rgw";
  crush_rule?: string;
  min_size?: number;
  pg_autoscale_mode?: "on" | "off" | "warn";
  pg_num?: number;
  pg_num_min?: number;
  size?: number;
  target_size?: string;
  target_size_ratio?: number;
};

export type CephPoolDeleteOptions = {
  force?: boolean;
  remove_ecprofile?: boolean;
  remove_storages?: boolean;
};

export type CephPoolDetails = CephPoolCreateInput & {
  pool: number;
  type: "replicated" | "erasure" | "unknown";
};

export type CephPoolStatus = {
  name: string;
  id: number;
  fast_read: boolean;
  hashpspool: boolean;
  nodeep_scrub: boolean;
  nodelete: boolean;
  nopgchange: boolean;
  noscrub: boolean;
  nosizechange: boolean;
  pgp_num: number;
  use_gmt_hitset: boolean;
  write_fadvise_dontneed: boolean;
  application?: "rbd" | "cephfs" | "rgw";
  application_list?: string[];
  autoscale_status?: Record<string, any>;
  crush_rule?: string;
  min_size: number;
  pg_autoscale_mode: "on" | "off" | "warn";
  pg_num: number;
  pg_num_min?: number;
  size: number;
  statistics?: Record<string, any>;
  target_size?: string;
  target_size_ratio?: number;
};

export type CmdSafetyInput = {
  service: "osd" | "mon" | "mds";
  action: "stop" | "destroy";
  id: string;
};

export type CmdSafetyResult = {
  safe: boolean;
  status?: string;
};

export type CephInitInput = {
  cluster_network?: string;
  disable_cephx?: boolean;
  min_size?: number;
  network?: string;
  pg_bits?: number;
  size?: number;
};

export type CephLogLine = {
  n: number;
  t: string;
};

export type CephCrushRule = {
  name: string;
  [key: string]: any;
}; 