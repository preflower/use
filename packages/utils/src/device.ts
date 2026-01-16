export const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)

export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'
