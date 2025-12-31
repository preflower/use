# useScrollParent

A Vue hook to find the nearest scrollable parent element.

## Usage

```vue
<script setup>
import { ref } from 'vue'
import { useScrollParent } from '@preflower/vue-use'

const el = ref(null)
const scrollParent = useScrollParent(el)
</script>

<template>
  <div ref="el">
    Scroll parent is: {{ scrollParent }}
  </div>
</template>
```

## API

### Arguments

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `el` | `Ref<Element \| null>` | A Vue `Ref` to the target element. | - |
| `root` | `ScrollElement` | The root element to stop searching at. | `window` |

### Returns

- A `Ref` containing the nearest scrollable element (or `window`).
