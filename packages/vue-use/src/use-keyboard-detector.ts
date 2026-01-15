import type { Ref } from 'vue'
import { returnIsRotationFunction } from '@preflower/utils'
import { onBeforeUnmount, ref } from 'vue'

export function useKeyboardDetector(): [Ref<boolean | undefined>, Ref<number>] {
  let initialHeight = document.documentElement.clientHeight

  const isOpened = ref<boolean>()
  const keyboardHeight = ref<number>(0)
  const isRotation = returnIsRotationFunction()

  const handler = () => {
    const height = document.documentElement.clientHeight
    const tagName = document.activeElement?.nodeName

    // 判断是否是旋转导致的resize
    if (isRotation()) {
      if (['INPUT', 'TEXTAREA'].includes(tagName!)) {
        (document.activeElement as HTMLInputElement).blur()
      }
      initialHeight = height
      return
    }

    // 当前活动元素非input, textarea则一定无法唤起Keyboard
    if (!['INPUT', 'TEXTAREA'].includes(tagName!)) {
      isOpened.value = false
      keyboardHeight.value = 0
      initialHeight = document.documentElement.clientHeight
      return
    }

    // 在部分场景(例如：百度输入法开启关闭)会出现值存在小数点波动的情况
    // 所以我们加个最小的偏移高度
    if (Math.abs(initialHeight - height) > 50) {
      isOpened.value = true
      keyboardHeight.value = initialHeight - height
    }
    else {
      isOpened.value = false
      keyboardHeight.value = 0
    }
  }

  window.addEventListener('resize', handler)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handler)
  })

  return [isOpened, keyboardHeight]
}
