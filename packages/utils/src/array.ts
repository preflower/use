/**
 * 获取数组第一个值，若非数组则直接返回
 * @param arr 源数组
 * @returns {any} 数组第一个值或原值
 */
export function getArrayFirst<T>(arr: T): T extends unknown[] ? T[number] | undefined : T {
  return (Array.isArray(arr) ? arr[0] : arr) as T extends unknown[] ? T[number] | undefined : T
}
