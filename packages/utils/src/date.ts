/**
 * 格式化时间
 * 在不使用 dayjs 这类 date 库时快速格式化时间
 * @param time 待格式化的时间
 * @param fmt 日期格式
 * @returns 格式化后的时间
 */
export function format (time: any, fmt = 'YYYY MM dd HH:mm:ss') {
  const date = new Date(time)
  const o: Record<string, number> = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours() % 12 || 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const value = o[k].toString()
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? value : `00${value}`.substr(value.length))
    }
  }
  return fmt
}
