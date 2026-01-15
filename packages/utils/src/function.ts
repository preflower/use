import type { AnyFunction } from './typescript'

/**
 * 函数只会触发一次, 后面都直接返回该结果
 * @param action 执行函数
 * @returns 函数返回值
 */
export function idempotent<T extends AnyFunction>(action: T): (...args: Parameters<T>) => ReturnType<T> {
  let called = false
  let result: ReturnType<T>

  return (...args: Parameters<T>) => {
    if (called) {
      return result
    }
    else {
      result = action(...args) as ReturnType<T>
      called = true

      return result
    }
  }
}
