export const toRawType = (val: unknown) => Object.prototype.toString.call(val).slice(8, -1)

/**
 * 从目标对象中返回包含指定 key 的新对象
 * @param target 目标对象
 * @param keys 目标对象的 key 列表
 * @returns 包含指定 key 的新对象
 */
export function pick<T extends object>(target: T, keys: Array<keyof T>) {
  return keys.reduce((dict, key) => ({ ...dict, [key]: target[key] }), {})
}
