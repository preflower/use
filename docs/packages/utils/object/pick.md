# pick

Select specific properties from an object and return a new object.

## Usage

```typescript
import { pick } from '@preflower/utils'

const user = { id: 1, name: 'Alice', email: 'alice@example.com' }
const summary = pick(user, ['id', 'name'])
// { id: 1, name: 'Alice' }
```

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| `target` | `T extends object` | The source object. |
| `keys` | `Array<keyof T>` | List of keys to pick from the target. |
