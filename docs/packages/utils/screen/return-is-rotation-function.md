# returnIsRotationFunction

Creates a function that detects if the screen has rotated between calls.

## Usage

```typescript
import { returnIsRotationFunction } from '@preflower/utils'

const isRotation = returnIsRotationFunction()

window.addEventListener('resize', () => {
  if (isRotation()) {
    console.log('Screen orientation changed!')
  }
})
```

## Returns

- `() => boolean`: A function that returns `true` if the screen width and height have changed since it was last called (or since initialization), indicating a rotation.
