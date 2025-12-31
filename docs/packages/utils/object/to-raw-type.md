# toRawType

Get the raw type of a value as a string (e.g., `'String'`, `'Object'`, `'Array'`).

## Usage

```typescript
import { toRawType } from '@preflower/utils'

toRawType([]) // 'Array'
toRawType({}) // 'Object'
toRawType('hello') // 'String'
```

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| `val` | `unknown` | The value to check. |
