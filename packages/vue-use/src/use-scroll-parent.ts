import type { Ref } from 'vue'
import { isClient } from '@preflower/utils'
import { ref, watch } from 'vue'

type ScrollElement = HTMLElement | SVGElement | Window | Document

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot = isClient ? window : undefined

function isElement(node: Node): node is Element {
  return (
    node.nodeType === Node.ELEMENT_NODE
    && (node as Element).tagName !== 'HTML'
    && (node as Element).tagName !== 'BODY'
  )
}

/**
 * Determine whether an element is potentially scrollable
 * (CSS allows scrolling; does NOT check actual overflow)
 */
function isScrollableElement(el: Element): boolean {
  const style = window.getComputedStyle(el)
  return overflowScrollReg.test(style.overflowY)
}

// https://github.com/vant-ui/vant/issues/3823
export function getScrollParent(
  el: Element,
  root: ScrollElement | undefined = defaultRoot,
) {
  let node: Node | null = el

  while (node && node !== root) {
    if (isElement(node) && isScrollableElement(node))
      return node as ScrollElement

    node = node.parentNode
  }

  return root
}

/**
 * Get the nearest scrollable parent node
 * @param el Target element
 * @param root Root node, default is window
 */
export function useScrollParent(
  el: Ref<Element | null>,
  root: ScrollElement | undefined = defaultRoot,
) {
  const scrollParent = ref<ScrollElement>()

  watch(el, () => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root)
    }
  }, {
    immediate: true,
  })

  return scrollParent
}
