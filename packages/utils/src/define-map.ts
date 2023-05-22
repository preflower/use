import { pick, toRawType } from './object'

const isPropertyKey = (val: unknown): val is PropertyKey => ['String', 'Number', 'Symbol'].includes(toRawType(val))

type ValidKeys<T, K extends keyof T = keyof T> = K extends K ? T[K] extends PropertyKey ? K : never : never

/**
 * 将数据字典灵活调整成想要的映射
 * @param defs 数据字典
 * @param key 基于数据字典中指定的 key 做映射
 * @param values 返回值中需要包含哪些字段, 若只传一个字符串则直接返回该结果
 */
export function defineMap<T extends object, K extends keyof T> (defs: T[], key: K): Array<T[K]>
export function defineMap<T extends object, K extends ValidKeys<T>, V extends keyof T> (defs: T[], key: K, values: V): Record<T[K] extends PropertyKey ? T[K] : never, T[V]>
export function defineMap<T extends object, K extends ValidKeys<T>, V extends keyof T> (defs: T[], key: K, values: V[]): Record<T[K] extends PropertyKey ? T[K] : never, Pick<T, V>>
export function defineMap<T extends object, K extends keyof T, V extends keyof T> (defs: T[], key: K, values?: V | V[]) {
  if (typeof values === 'undefined') {
    return defs.map(def => def[key])
  }

  return defs.reduce((map, def) => {
    const _key = def[key]
    if (!isPropertyKey(_key)) return map

    const _val = Array.isArray(values) ? pick(def, values) : def[values]

    return { ...map, [_key]: _val }
  }, {})
}
