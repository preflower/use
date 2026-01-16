# isClient

判断当前是否为浏览器环境。

## Usage

```typescript
import { isClient } from '@preflower/utils'

if (isClient) {
  console.log('Running in browser')
}
```

## Implementation

```typescript
export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'
```
