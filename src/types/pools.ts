export type CreatePoolInput = {
  poolid: string;
  comment?: string;
};

export type UpdatePoolInput = {
  comment?: string;
  vms?: string;
  storage?: string;
  delete?: boolean;
  allow_move?: boolean;
};

export type PoolSummary = {
  poolid: string;
  comment?: string;
};

export type PoolDetails = {
  poolid: string;
  comment?: string;
  members?: Array<{
    type: "qemu" | "lxc" | "storage";
    id: string;
  }>;
}; 