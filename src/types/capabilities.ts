export type NodeCapabilities = {
  [key: string]: any;
};

export type QemuCapabilities = {
  [key: string]: any;
};

export type QemuCPUModel = {
  custom: boolean;
  name: string;
  vendor: string;
};

export type QemuMachineType = {
  id: string;
  type: "q35" | "i440fx";
  version: string;
  changes?: string;
}; 