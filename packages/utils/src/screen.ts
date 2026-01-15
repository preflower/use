/**
 * 返回判断屏幕是否旋转的函数
 * 通过闭包保存最新的屏幕值
 * @returns () => boolean
 */
export function returnIsRotationFunction() {
  let w = window.screen.width
  let h = window.screen.height

  return () => {
    const result = w === window.screen.width && h === window.screen.height
    w = window.screen.width
    h = window.screen.height
    return !result
  }
}
