# isIOS

A boolean constant that indicates if the current application is running on an iOS device.

## Usage

```typescript
import { isIOS } from '@preflower/utils'

if (isIOS) {
  console.log('Running on iOS')
}
```

## Implementation

Uses `navigator.userAgent` to detect iOS signatures.
