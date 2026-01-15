# Define Map Utilities

Flexible mapping of data dictionaries (arrays of objects) to other formats.

## defineMap

Transforms an array of objects into an array, or a record (map) keyed by one of the object's properties.

### Usage

```typescript
import { defineMap } from '@preflower/utils'

const userList = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
]

// 1. Get an array of specific keys
const ids = defineMap(userList, 'id')
// [1, 2]

// 2. Map keyed by ID to a specific property
const nameMap = defineMap(userList, 'id', 'name')
// { 1: 'Alice', 2: 'Bob' }

// 3. Map keyed by ID to multiple properties (Pick)
const detailMap = defineMap(userList, 'id', ['name', 'age'])
// { 1: { name: 'Alice', age: 25 }, 2: { name: 'Bob', age: 30 } }
```

### Type Definition

This function is overloaded to provide strong typing for different use cases.

### Parameters

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `defs` | `T[]` | Array of objects to transform. | - |
| `key` | `K` | The property to use as the base for mapping. | - |
| `values` | `V \| V[]` | The properties to include in the resulting map or array. | `undefined` |
