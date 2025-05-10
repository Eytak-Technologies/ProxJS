import type { ProxmoxAuth } from './types/common';
import type { 
  StorageType, 
  CreateStorageInput, 
  UpdateStorageInput,
  GetStorageResponse,
  DeleteStorageResponse
} from './types/storage';
import type { 
  CreatePoolInput,
  UpdatePoolInput,
  PoolSummary,
  PoolDetails
} from './types/pools';
import type {
  NodeStatus,
  NodeSummary,
  NodeDetails
} from './types/nodes';
import type {
  AptDirectoryEntry,
  AptRepositoriesInfo,
  AptRepositoryUpdate,
  AptStandardRepoInput,
  AptUpdateInfo,
  AptPackageVersionInfo
} from './types/apt';
import type {
  NodeCapabilities,
  QemuCapabilities,
  QemuCPUModel,
  QemuMachineType
} from './types/capabilities';
import type {
  CephDirectoryInfo,
  CephCfgDirectoryInfo,
  CephConfigDBEntry,
  CephFSInfo,
  CephMDSInfo,
  CephMGRInfo,
  CephMonInfo,
  OSDCreateOptions,
  CephOSDTree,
  CephOSDInfo,
  LVMVolumeInfo,
  CephOSDMetadata,
  CephPoolSummary,
  CephPoolCreateInput,
  CephPoolUpdateInput,
  CephPoolDeleteOptions,
  CephPoolDetails,
  CephPoolStatus,
  CmdSafetyInput,
  CmdSafetyResult,
  CephInitInput,
  CephLogLine,
  CephCrushRule
} from './types/ceph';
import type { VersionInfo } from './version/get';
import type {
  CertificateInfo,
  CustomCertUploadInput,
  AcmeAccountInfo,
  AcmeAccountCreateInput,
  AcmeCertificateOrderInput,
  AcmeCertificateRevokeInput,
  AcmeCertificateRenewInput,
  AcmePluginInfo,
  AcmePluginCreateInput,
  AcmePluginUpdateInput
} from './types/certificates';
import type {
  DiskListItem,
  DiskSmartInfo,
  DirectoryMountInfo,
  CreateDirectoryInput,
  CreateLVMInput,
  LVMGroupInfo,
  LVMThinInfo,
  CreateLVMThinInput,
  ZpoolInfo,
  ZpoolDetails,
  CreateZFSInput
} from './types/disks';
import type {
  FirewallRule,
  CreateFirewallRuleInput,
  UpdateFirewallRuleInput,
  FirewallLogLine,
  FirewallOptions
} from './types/firewall';
import type {
  HardwareType,
  PCIDevice,
  PCIMethodInfo,
  MediatedDeviceType,
  USBDevice
} from './types/hardware';

import { getVersion } from './version/get';
import { listStorages } from './storage/index';
import { createStorage } from './storage/create';
import { getStorage } from './storage/get';
import { updateStorage } from './storage/update';
import { deleteStorage } from './storage/delete';
import { listPools } from './pools/list';
import { getPool } from './pools/get';
import { createPool } from './pools/create';
import { updatePool } from './pools/update';
import { deletePool } from './pools/delete';
import { listNodes } from './nodes/list';
import { getNode } from './nodes/get';
import { listApt } from './nodes/apt/list';
import { getAptChangelog } from './nodes/apt/changelog';
import { getAptRepositories } from './nodes/apt/repositories/get';
import { updateAptRepository } from './nodes/apt/repositories/update';
import { addStandardAptRepository } from './nodes/apt/repositories/addStandard';
import { listAvailableAptUpdates } from './nodes/apt/update/listAvailable';
import { refreshAptUpdates } from './nodes/apt/update/refresh';
import { getAptVersions } from './nodes/apt/versions';
import { listCapabilities } from './nodes/capabilities/list';
import { getQemuCapabilities } from './nodes/capabilities/qemu';
import { listQemuCpus } from './nodes/capabilities/qemu/cpus';
import { listQemuMachines } from './nodes/capabilities/qemu/machines';
import { getCephIndex } from './nodes/ceph/index';
import { getCephConfigIndex } from './nodes/ceph/config/index';
import { getCephConfigDB } from './nodes/ceph/config/db';
import { getCephConfigRaw } from './nodes/ceph/config/raw';
import { getCephConfigValues } from './nodes/ceph/config/values';
import { listCephFS } from './nodes/ceph/fs/list';
import { createCephFS } from './nodes/ceph/fs/create';
import { listCephMDS } from './nodes/ceph/mds/list';
import { createCephMDS } from './nodes/ceph/mds/create';
import { deleteCephMDS } from './nodes/ceph/mds/delete';
import { listCephMGR } from './nodes/ceph/mgr/list';
import { createCephMGR } from './nodes/ceph/mgr/create';
import { deleteCephMGR } from './nodes/ceph/mgr/delete';
import { listCephMon } from './nodes/ceph/mon/list';
import { createCephMon } from './nodes/ceph/mon/create';
import { deleteCephMon } from './nodes/ceph/mon/delete';
import { listCephOSD } from './nodes/ceph/osd/list';
import { createCephOSD } from './nodes/ceph/osd/create';
import { getCephOSD } from './nodes/ceph/osd/get';
import { deleteCephOSD } from './nodes/ceph/osd/delete';
import { inCephOSD } from './nodes/ceph/osd/in';
import { outCephOSD } from './nodes/ceph/osd/out';
import { scrubCephOSD } from './nodes/ceph/osd/scrub';
import { getLVInfoCephOSD } from './nodes/ceph/osd/lvInfo';
import { getMetadataCephOSD } from './nodes/ceph/osd/metadata';
import { listCephPool } from './nodes/ceph/pool/list';
import { getCephPool } from './nodes/ceph/pool/get';
import { getCephPoolStatus } from './nodes/ceph/pool/status';
import { createCephPool } from './nodes/ceph/pool/create';
import { updateCephPool } from './nodes/ceph/pool/update';
import { deleteCephPool } from './nodes/ceph/pool/delete';
import { checkCmdSafety } from './nodes/ceph/cmdSafety';
import { getCrushMap } from './nodes/ceph/crush';
import { initCeph } from './nodes/ceph/init';
import { getLog } from './nodes/ceph/log';
import { restartCeph } from './nodes/ceph/restart';
import { startCeph } from './nodes/ceph/start';
import { stopCeph } from './nodes/ceph/stop';
import { getCephStatus } from './nodes/ceph/status';
import { getCephRules } from './nodes/ceph/rules';
import { listCertificates } from './nodes/certificates/index';
import { uploadCustomCertificate } from './nodes/certificates/custom';
import { getAcmeDirectoryInfo } from './nodes/certificates/acme/index';
import { 
  listAcmeAccount,
  registerAcmeAccount,
  deactivateAcmeAccount
} from './nodes/certificates/acme/account';
import {
  orderAcmeCertificate,
  revokeAcmeCertificate,
  renewAcmeCertificate
} from './nodes/certificates/acme/certificate';
import {
  getAcmePlugins,
  addAcmePlugin,
  updateAcmePlugin,
  deleteAcmePlugin
} from './nodes/certificates/acme/plugins';
import { getDisksIndex } from './nodes/disks/index';
import { listDisks } from './nodes/disks/list';
import { getDiskSmart } from './nodes/disks/smart';
import { wipeDisk } from './nodes/disks/wipe';
import { initGpt } from './nodes/disks/initGpt';
import { listDirectories } from './nodes/disks/directory/list';
import { createDirectory } from './nodes/disks/directory/create';
import { deleteDirectory } from './nodes/disks/directory/delete';
import { listLVM } from './nodes/disks/lvm/list';
import { createLVM } from './nodes/disks/lvm/create';
import { deleteLVM } from './nodes/disks/lvm/delete';
import { listLVMThin } from './nodes/disks/lvmthin/list';
import { createLVMThin } from './nodes/disks/lvmthin/create';
import { deleteLVMThin } from './nodes/disks/lvmthin/delete';
import { listZFS } from './nodes/disks/zfs/list';
import { getZFS } from './nodes/disks/zfs/get';
import { createZFS } from './nodes/disks/zfs/create';
import { deleteZFS } from './nodes/disks/zfs/delete';
import { getFirewall } from './nodes/firewall/get';
import { getFirewallOptions } from './nodes/firewall/options';
import { getFirewallLog } from './nodes/firewall/log';
import { listFirewallRules } from './nodes/firewall/rules/list';
import { getFirewallRule } from './nodes/firewall/rules/get';
import { createFirewallRule } from './nodes/firewall/rules/create';
import { updateFirewallRule } from './nodes/firewall/rules/update';
import { deleteFirewallRule } from './nodes/firewall/rules/delete';
import { getHardwareTypes } from './nodes/hardware/getTypes';
import { listUSBDevices } from './nodes/hardware/usb/list';
import { listPCIDevices } from './nodes/hardware/pci/list';
import { getPCIDevice } from './nodes/hardware/pci/get';
import { getPCIMdevTypes } from './nodes/hardware/pci/mdev';

// Re-export types
export type { 
  ProxmoxAuth,
  StorageType,
  CreateStorageInput,
  UpdateStorageInput,
  GetStorageResponse,
  DeleteStorageResponse,
  CreatePoolInput,
  UpdatePoolInput,
  PoolSummary,
  PoolDetails,
  NodeStatus,
  NodeSummary,
  NodeDetails,
  AptDirectoryEntry,
  AptRepositoriesInfo,
  AptRepositoryUpdate,
  AptStandardRepoInput,
  AptUpdateInfo,
  AptPackageVersionInfo,
  NodeCapabilities,
  QemuCapabilities,
  QemuCPUModel,
  QemuMachineType,
  CephDirectoryInfo,
  CephCfgDirectoryInfo,
  CephConfigDBEntry,
  CephFSInfo,
  CephMDSInfo,
  CephMGRInfo,
  CephMonInfo,
  OSDCreateOptions,
  CephOSDTree,
  CephOSDInfo,
  LVMVolumeInfo,
  CephOSDMetadata,
  CephPoolSummary,
  CephPoolCreateInput,
  CephPoolUpdateInput,
  CephPoolDeleteOptions,
  CephPoolDetails,
  CephPoolStatus,
  CmdSafetyInput,
  CmdSafetyResult,
  CephInitInput,
  CephLogLine,
  CephCrushRule,
  VersionInfo,
  // Certificate types
  CertificateInfo,
  CustomCertUploadInput,
  AcmeAccountInfo,
  AcmeAccountCreateInput,
  AcmeCertificateOrderInput,
  AcmeCertificateRevokeInput,
  AcmeCertificateRenewInput,
  AcmePluginInfo,
  AcmePluginCreateInput,
  AcmePluginUpdateInput,
  // Disk types
  DiskListItem,
  DiskSmartInfo,
  DirectoryMountInfo,
  CreateDirectoryInput,
  CreateLVMInput,
  LVMGroupInfo,
  LVMThinInfo,
  CreateLVMThinInput,
  ZpoolInfo,
  ZpoolDetails,
  CreateZFSInput,
  // Firewall types
  FirewallRule,
  CreateFirewallRuleInput,
  UpdateFirewallRuleInput,
  FirewallLogLine,
  FirewallOptions,
  // Hardware types
  HardwareType,
  PCIDevice,
  PCIMethodInfo,
  MediatedDeviceType,
  USBDevice
};

/**
 * Main proxjs API client factory
 * @param auth Authentication details for Proxmox VE
 * @returns A configured API client
 */
export const proxjs = (auth: ProxmoxAuth) => ({
  version: { 
    get: () => getVersion(auth)
  },
  storage: {
    index: (type?: StorageType) => listStorages(auth, type),
    create: (data: CreateStorageInput) => createStorage(auth, data),
    get: (storageId: string) => getStorage(auth, storageId),
    update: (storageId: string, data: UpdateStorageInput) => updateStorage(auth, storageId, data),
    delete: (storageId: string) => deleteStorage(auth, storageId)
  },
  pools: {
    list: (options?: { type?: "qemu" | "lxc" | "storage" }) => listPools(auth, options),
    get: (poolid: string) => getPool(auth, poolid),
    create: (data: CreatePoolInput) => createPool(auth, data),
    update: (poolid: string, data: UpdatePoolInput) => updatePool(auth, poolid, data),
    delete: (poolid: string) => deletePool(auth, poolid)
  },
  nodes: {
    list: () => listNodes(auth),
    get: (node: string) => getNode(auth, node),
    apt: {
      list: (node: string) => listApt(auth, node),
      changelog: (node: string, name: string, version?: string) => 
        getAptChangelog(auth, node, name, version),
      repositories: {
        get: (node: string) => getAptRepositories(auth, node),
        update: (node: string, data: AptRepositoryUpdate) => 
          updateAptRepository(auth, node, data),
        addStandard: (node: string, data: AptStandardRepoInput) => 
          addStandardAptRepository(auth, node, data)
      },
      update: {
        listAvailable: (node: string) => listAvailableAptUpdates(auth, node),
        refresh: (node: string, options?: { notify?: boolean; quiet?: boolean }) => 
          refreshAptUpdates(auth, node, options)
      },
      versions: (node: string) => getAptVersions(auth, node)
    },
    capabilities: {
      list: (node: string) => listCapabilities(auth, node),
      qemu: {
        get: (node: string) => getQemuCapabilities(auth, node),
        cpus: (node: string) => listQemuCpus(auth, node),
        machines: (node: string) => listQemuMachines(auth, node)
      }
    },
    ceph: {
      index: (node: string) => getCephIndex(auth, node),
      cmdSafety: (node: string, input: CmdSafetyInput) => checkCmdSafety(auth, node, input),
      getCrushMap: (node: string) => getCrushMap(auth, node),
      init: (node: string, input?: CephInitInput) => initCeph(auth, node, input),
      getLog: (node: string, options?: { limit?: number; start?: number }) => 
        getLog(auth, node, options),
      restart: (node: string, service?: string) => restartCeph(auth, node, service),
      start: (node: string, service?: string) => startCeph(auth, node, service),
      stop: (node: string, service?: string) => stopCeph(auth, node, service),
      status: (node: string) => getCephStatus(auth, node),
      rules: (node: string) => getCephRules(auth, node),
      config: {
        index: (node: string) => getCephConfigIndex(auth, node),
        db: (node: string) => getCephConfigDB(auth, node),
        raw: (node: string) => getCephConfigRaw(auth, node),
        values: (node: string, keys: string) => getCephConfigValues(auth, node, keys)
      },
      fs: {
        list: (node: string) => listCephFS(auth, node),
        create: (node: string, name: string, options?: { add_storage?: boolean; pg_num?: number }) => 
          createCephFS(auth, node, name, options)
      },
      mds: {
        list: (node: string) => listCephMDS(auth, node),
        create: (node: string, name: string, options?: { hotstandby?: boolean }) => 
          createCephMDS(auth, node, name, options),
        delete: (node: string, name: string) => deleteCephMDS(auth, node, name)
      },
      mgr: {
        list: (node: string) => listCephMGR(auth, node),
        create: (node: string, id: string) => createCephMGR(auth, node, id),
        delete: (node: string, id: string) => deleteCephMGR(auth, node, id)
      },
      mon: {
        list: (node: string) => listCephMon(auth, node),
        create: (node: string, monid: string, options?: { mon_address?: string }) => 
          createCephMon(auth, node, monid, options),
        delete: (node: string, monid: string) => deleteCephMon(auth, node, monid)
      },
      osd: {
        list: (node: string) => listCephOSD(auth, node),
        create: (node: string, device: string, options?: OSDCreateOptions) => 
          createCephOSD(auth, node, device, options),
        get: (node: string, osdid: number) => getCephOSD(auth, node, osdid),
        delete: (node: string, osdid: number, cleanup?: boolean) => 
          deleteCephOSD(auth, node, osdid, cleanup),
        in: (node: string, osdid: number) => inCephOSD(auth, node, osdid),
        out: (node: string, osdid: number) => outCephOSD(auth, node, osdid),
        scrub: (node: string, osdid: number, deep?: boolean) => 
          scrubCephOSD(auth, node, osdid, deep),
        lvInfo: (node: string, osdid: number, type?: "block" | "db" | "wal") => 
          getLVInfoCephOSD(auth, node, osdid, type),
        metadata: (node: string, osdid: number) => getMetadataCephOSD(auth, node, osdid)
      },
      pool: {
        list: (node: string) => listCephPool(auth, node),
        get: (node: string, name: string) => getCephPool(auth, node, name),
        status: (node: string, name: string, verbose?: boolean) => 
          getCephPoolStatus(auth, node, name, verbose),
        create: (node: string, input: CephPoolCreateInput) => 
          createCephPool(auth, node, input),
        update: (node: string, name: string, input: CephPoolUpdateInput) => 
          updateCephPool(auth, node, name, input),
        delete: (node: string, name: string, options?: CephPoolDeleteOptions) => 
          deleteCephPool(auth, node, name, options)
      }
    },
    certificates: {
      list: (node: string) => listCertificates(auth, node),
      custom: {
        upload: (node: string, data: CustomCertUploadInput) => 
          uploadCustomCertificate(auth, node, data)
      },
      acme: {
        info: (node: string) => getAcmeDirectoryInfo(auth, node),
        account: {
          list: (node: string) => listAcmeAccount(auth, node),
          register: (node: string, data: AcmeAccountCreateInput) => 
            registerAcmeAccount(auth, node, data),
          deactivate: (node: string, accountName: string) => 
            deactivateAcmeAccount(auth, node, accountName)
        },
        certificate: {
          order: (node: string, data: AcmeCertificateOrderInput) => 
            orderAcmeCertificate(auth, node, data),
          revoke: (node: string, data: AcmeCertificateRevokeInput) => 
            revokeAcmeCertificate(auth, node, data),
          renew: (node: string, data?: AcmeCertificateRenewInput) => 
            renewAcmeCertificate(auth, node, data)
        },
        plugins: {
          list: (node: string) => getAcmePlugins(auth, node),
          add: (node: string, id: string, data: AcmePluginCreateInput) => 
            addAcmePlugin(auth, node, id, data),
          update: (node: string, id: string, data: AcmePluginUpdateInput) => 
            updateAcmePlugin(auth, node, id, data),
          delete: (node: string, id: string) => deleteAcmePlugin(auth, node, id)
        }
      }
    },
    disks: {
      index: (node: string) => getDisksIndex(auth, node),
      list: (node: string, options?: { include_partitions?: boolean; skipsmart?: boolean; type?: "unused" | "journal_disks" }) => 
        listDisks(auth, node, options),
      smart: (node: string, disk: string, healthonly?: boolean) => 
        getDiskSmart(auth, node, disk, healthonly),
      wipe: (node: string, disk: string) => wipeDisk(auth, node, disk),
      initGpt: (node: string, disk: string, uuid?: string) => 
        initGpt(auth, node, disk, uuid),
      directory: {
        list: (node: string) => listDirectories(auth, node),
        create: (node: string, input: CreateDirectoryInput) => 
          createDirectory(auth, node, input),
        delete: (node: string, name: string, options?: { cleanup_config?: boolean; cleanup_disks?: boolean }) => 
          deleteDirectory(auth, node, name, options)
      },
      lvm: {
        list: (node: string) => listLVM(auth, node),
        create: (node: string, input: CreateLVMInput) => createLVM(auth, node, input),
        delete: (node: string, name: string, options?: { cleanup_config?: boolean; cleanup_disks?: boolean }) => 
          deleteLVM(auth, node, name, options)
      },
      lvmthin: {
        list: (node: string) => listLVMThin(auth, node),
        create: (node: string, input: CreateLVMThinInput) => 
          createLVMThin(auth, node, input),
        delete: (node: string, name: string, volume_group: string, options?: { cleanup_config?: boolean; cleanup_disks?: boolean }) => 
          deleteLVMThin(auth, node, name, volume_group, options)
      },
      zfs: {
        list: (node: string) => listZFS(auth, node),
        get: (node: string, name: string) => getZFS(auth, node, name),
        create: (node: string, input: CreateZFSInput) => createZFS(auth, node, input),
        delete: (node: string, name: string, options?: { cleanup_config?: boolean; cleanup_disks?: boolean }) => 
          deleteZFS(auth, node, name, options)
      }
    },
    firewall: {
      get: (node: string) => getFirewall(auth, node),
      getOptions: (node: string) => getFirewallOptions(auth, node),
      getLog: (node: string, options?: { limit?: number; since?: number; start?: number; until?: number }) => 
        getFirewallLog(auth, node, options),
      rules: {
        list: (node: string) => listFirewallRules(auth, node),
        get: (node: string, pos: number) => getFirewallRule(auth, node, pos),
        create: (node: string, input: CreateFirewallRuleInput) => 
          createFirewallRule(auth, node, input),
        update: (node: string, pos: number, input: UpdateFirewallRuleInput) => 
          updateFirewallRule(auth, node, pos, input),
        delete: (node: string, pos: number, digest?: string) => 
          deleteFirewallRule(auth, node, pos, digest)
      }
    },
    hardware: {
      getTypes: (node: string) => getHardwareTypes(auth, node),
      pci: {
        list: (node: string, options?: { pci_class_blacklist?: string; verbose?: boolean }) => 
          listPCIDevices(auth, node, options),
        get: (node: string, id: string) => getPCIDevice(auth, node, id),
        getMdevTypes: (node: string, id: string) => getPCIMdevTypes(auth, node, id)
      },
      usb: {
        list: (node: string) => listUSBDevices(auth, node)
      }
    }
  }
}); 