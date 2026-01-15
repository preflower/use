# @preflower/utils

General purpose TypeScript utilities for daily development.

## Installation

```bash
pnpm add @preflower/utils
```

## Utilities Index

### Array
- [getArrayFirst](./array/get-array-first): Safety access to the first element of a variable.

### Date
- [format](./date/format): Lightweight date formatting without dependencies.

### Device
- [isIOS](./device/is-ios): Detect if the device is iOS.

### Function
- [idempotent](./function/idempotent): Ensure a function only executes once.

### Object
- [defineMap](./object/define-map): Transform lists into typed maps or extracted arrays.
- [toRawType](./object/to-raw-type): Get the underlying JS type string.
- [pick](./object/pick): Create a new object with selected properties.

### Screen
- [returnIsRotationFunction](./screen/return-is-rotation-function): Detect screen rotation events.

### Storage
- [storage](./storage/): Typed wrappers for `localStorage` and `sessionStorage`.
