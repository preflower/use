# idempotent

Higher-order function that ensures the original function is only executed once. Subsequent calls return the result of the first call.

## Usage

```typescript
import { idempotent } from '@preflower/utils'

function expensiveTask(id: number) {
  console.log('Task executed for', id)
  return id * 2
}

const memoizedTask = idempotent(expensiveTask)

memoizedTask(10) // Logs: Task executed for 10. Returns: 20
memoizedTask(10) // No log. Returns: 20
memoizedTask(20) // No log. Returns: 20 (still returns the result of the FIRST call)
```

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `T extends AnyFunction` | The function to be made idempotent. |

## Returns

- A new function with the same signature that always returns the same result after the first call.
