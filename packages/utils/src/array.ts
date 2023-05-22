/**
 * 获取数组第一个值，若非数组则直接返回
 * @param arr 源数组
 * @returns {any}
 */
export function getArrayFirst<T extends unknown> (arr: T): T extends any[] ? (T extends [infer F, ...any] ? F : undefined) : T {
  return Array.isArray(arr) ? arr[0] : arr
}
