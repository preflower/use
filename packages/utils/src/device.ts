export const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

/**
 * 判断当前是否为浏览器环境
 */
export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'
