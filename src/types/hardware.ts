export type HardwareType = {
  type: string;
  [key: string]: any;
};

export type PCIDevice = {
  id: string;
  class: string;
  device: string;
  vendor: string;
  vendor_name?: string;
  device_name?: string;
  subsystem_device?: string;
  subsystem_device_name?: string;
  subsystem_vendor?: string;
  subsystem_vendor_name?: string;
  iommugroup: number;
  mdev?: boolean;
};

export type PCIMethodInfo = {
  method: string;
  [key: string]: any;
};

export type MediatedDeviceType = {
  type: string;
  description: string;
  available: number;
  name?: string;
};

export type USBDevice = {
  busnum: number;
  devnum: number;
  level: number;
  class: number;
  port: number;
  prodid: string;
  vendid: string;
  speed: string;
  manufacturer?: string;
  product?: string;
  serial?: string;
  usbpath?: string;
}; 