# ProxJS

A modular, type-safe TypeScript library for communicating with the Proxmox VE 8.4.0 API.

## Features

- Full TypeScript support with end-to-end type safety
- Modular structure for easy extensibility
- Uses native fetch API (no external HTTP libraries)
- Clean, consistent API design

## Installation

```bash
npm install proxjs
```

## Usage

```typescript
import { proxjs } from 'proxjs';

// Initialize the client with your authentication details
const client = proxjs({
  host: 'https://your-proxmox-server:8006',
  ticket: 'PVE:user@pve:ticket',
  csrfToken: 'csrf-prevention-token'
});

// Get Proxmox VE version
const version = await client.version.get();
console.log(`Running Proxmox VE ${version.version}`);

// List all storage
const storages = await client.storage.index();
console.log(`Found ${storages.length} storage resources`);

// Create a new directory storage
const newStorage = await client.storage.create({
  storage: 'backup',
  type: 'dir',
  path: '/mnt/backup',
  content: 'backup'
});
console.log(`Created new storage: ${newStorage.storage}`);
```

## API

### Authentication

All API calls require authentication:

```typescript
type ProxmoxAuth = {
  host: string;     // Example: https://your-node:8006
  ticket: string;   // Value for the PVEAuthCookie
  csrfToken: string; // Value for CSRFPreventionToken
};
```

### Available Endpoints

- `version.get()` - Get Proxmox VE version information
- `storage.index([type])` - List all storage or filter by type
- `storage.create(data)` - Create a new storage

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run linting
npm run lint
```

## License

MIT
