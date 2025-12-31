# useKeyboardDetector

A Vue hook to detect the visibility and height of the virtual keyboard. Particularly useful for mobile web applications where layout adjustments are needed when the keyboard overlaps content.

## Usage

```vue
<script setup>
import { useKeyboardDetector } from '@preflower/vue-use'

const [isOpened, keyboardHeight] = useKeyboardDetector()
</script>

<template>
  <div class="container">
    <p>Keyboard is open: {{ isOpened }}</p>
    <p>Keyboard height: {{ keyboardHeight }}px</p>
    
    <input type="text" placeholder="Focus me to open keyboard" />
  </div>
</template>
```

## Features

- **Orientation Awareness**: Corrects for screen rotations to prevent false positives.
- **Auto Cleanup**: Automatically removes event listeners when the component is unmounted.
- **Threshold Detection**: Uses a 50px threshold to filter out small layout shifts that aren't keyboard-related.

## Returns

`[Ref<boolean | undefined>, Ref<number>]`

| Index | Name | Type | Description |
| --- | --- | --- | --- |
| 0 | `isOpened` | `Ref<boolean \| undefined>` | Indicates if the keyboard is currently visible. |
| 1 | `keyboardHeight` | `Ref<number>` | The calculated height of the virtual keyboard in pixels. |
