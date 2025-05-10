export type FirewallRule = {
  action: string;
  type: "in" | "out" | "forward" | "group";
  pos: number;
  enable?: number;
  proto?: string;
  source?: string;
  sport?: string;
  dest?: string;
  dport?: string;
  iface?: string;
  comment?: string;
  log?: string;
  macro?: string;
  icmp_type?: string;
  ipversion?: number;
};

export type CreateFirewallRuleInput = Omit<FirewallRule, "pos"> & {
  pos?: number;
};

export type UpdateFirewallRuleInput = Partial<Omit<FirewallRule, "pos">> & {
  delete?: string;
  digest?: string;
  moveto?: number;
};

export type FirewallLogLine = {
  n: number;
  t: string;
};

export type FirewallOptions = {
  enable?: boolean;
  log_level_forward?: string;
  log_level_in?: string;
  log_level_out?: string;
  log_nf_conntrack?: boolean;
  ndp?: boolean;
  nf_conntrack_allow_invalid?: boolean;
  nf_conntrack_helpers?: string;
  nf_conntrack_max?: number;
  nf_conntrack_tcp_timeout_established?: number;
  nf_conntrack_tcp_timeout_syn_recv?: number;
  nftables?: boolean;
  nosmurfs?: boolean;
  protection_synflood?: boolean;
  protection_synflood_burst?: number;
  protection_synflood_rate?: number;
  smurf_log_level?: string;
  tcp_flags_log_level?: string;
  tcpflags?: boolean;
}; 