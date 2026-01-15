# Storage Utilities

Type-safe and easy-to-use wrappers for localStorage and sessionStorage.

## storage

The `storage` object provides pre-instantiated access to `localStorage` and `sessionStorage` with JSON serialization.

### Usage

```typescript
import { storage } from '@preflower/utils'

// localStorage
storage.local.set('user', { id: 1, name: 'Alice' })
const user = storage.local.get<{ id: number, name: string }>('user')
storage.local.remove('user')
storage.local.clear()

// sessionStorage
storage.session.set('token', 'abc-123')
const token = storage.session.get<string>('token')
```

### Methods on `EasyStorage`

Both `storage.local` and `storage.session` are instances of `EasyStorage`.

- `get<T>(key: string): T | null`: Retrieves and parses a JSON item from storage.
- `set<T>(key: string, value: T): void`: Serializes and stores an item.
- `remove(key: string): void`: Removes a specific item.
- `clear(): void`: Clears all items in that storage instance.
