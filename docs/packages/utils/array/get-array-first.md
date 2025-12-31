# getArrayFirst

Gets the first element of an array. If the input is not an array, it returns the input itself.

## Usage

```typescript
import { getArrayFirst } from '@preflower/utils'

getArrayFirst([1, 2, 3]) // 1
getArrayFirst('not an array') // 'not an array'
```

## Type Definition

```typescript
export function getArrayFirst<T>(arr: T): T extends unknown[] ? T[number] | undefined : T
```

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| `arr` | `T` | The input to retrieve the first element from. |
