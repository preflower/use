# format

A lightweight date formatting function that doesn't require external libraries like dayjs.

## Usage

```typescript
import { format } from '@preflower/utils'

format(new Date(), 'YYYY-MM-dd HH:mm:ss')
format(Date.now(), 'YYYY/MM/dd')
format('2025-01-01', 'MM-dd')
```

## Parameters

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| `time` | `string \| number \| Date` | The time to format. | - |
| `fmt` | `string` | The format string. | `'YYYY MM dd HH:mm:ss'` |

## Support Format Tokens

- `YYYY`: Full year (e.g., 2025)
- `MM`: Month (01-12)
- `dd`: Day (01-31)
- `HH`: Hour (00-23)
- `hh`: Hour (01-12)
- `mm`: Minute (00-59)
- `ss`: Second (00-59)
