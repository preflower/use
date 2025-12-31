import { ref, watch, type Ref } from 'vue'

type ScrollElement = HTMLElement | Window;

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot = window

function isElement (node: Element) {
  const ELEMENT_NODE_TYPE = 1
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  )
}

// https://github.com/vant-ui/vant/issues/3823
export function getScrollParent (
  el: Element,
  root: ScrollElement | undefined = defaultRoot
) {
  let node = el

  while (node != null && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode as Element
  }

  return root
}

/**
 * Get the nearest scrollable parent node
 * @param el Target element
 * @param root Root node, default is window
 */
export function useScrollParent (
  el: Ref<Element | null>,
  root: ScrollElement | undefined = defaultRoot
) {
  const scrollParent = ref<Element | Window>()

  watch(el, () => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root)
    }
  }, {
    immediate: true
  })

  return scrollParent
}
