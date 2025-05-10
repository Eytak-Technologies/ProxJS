export type NodeStatus = "unknown" | "online" | "offline";

export type NodeSummary = {
  node: string;
  status: NodeStatus;
  cpu?: number;
  level?: string;
  maxcpu?: number;
  maxmem?: number;
  mem?: number;
  ssl_fingerprint?: string;
  uptime?: number;
};

export type NodeDetails = {
  node: string;
  status: NodeStatus;
  [key: string]: any;
}; 