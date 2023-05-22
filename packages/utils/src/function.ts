/**
 * 函数只会触发一次, 后面都直接返回该结果
 * @param action 执行函数
 * @returns 函数返回值
 */
export const idempotent = <T extends (...args: any[]) => any>(action: T): (...args: any) => ReturnType<T> => {
  let called = false
  let result: ReturnType<T>

  return (...args: any) => {
    if (called) {
      return result
    } else {
      result = action(...args)
      called = true

      return result
    }
  }
}
