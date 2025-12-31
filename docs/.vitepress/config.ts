import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Preflower Use',
  description: 'A monorepo for self that save my work accumulation',
  base: '/use/',
  themeConfig: {
    nav: [
      { text: 'Utils', link: '/packages/utils/' },
      { text: 'Vue Use', link: '/packages/vue-use/' }
    ],
    sidebar: {

      '/packages/utils/': [
        {
          text: 'Introduction',
          link: '/packages/utils/'
        },
        {
          text: 'Array',
          items: [
            { text: 'getArrayFirst', link: '/packages/utils/array/get-array-first' }
          ]
        },
        {
          text: 'Date',
          items: [
            { text: 'format', link: '/packages/utils/date/format' }
          ]
        },
        {
          text: 'Device',
          items: [
            { text: 'isIOS', link: '/packages/utils/device/is-ios' }
          ]
        },
        {
          text: 'Function',
          items: [
            { text: 'idempotent', link: '/packages/utils/function/idempotent' }
          ]
        },
        {
          text: 'Object',
          items: [
            { text: 'defineMap', link: '/packages/utils/object/define-map' },
            { text: 'toRawType', link: '/packages/utils/object/to-raw-type' },
            { text: 'pick', link: '/packages/utils/object/pick' }
          ]
        },
        {
          text: 'Screen',
          items: [
            { text: 'returnIsRotationFunction', link: '/packages/utils/screen/return-is-rotation-function' }
          ]
        },
        {
          text: 'Storage',
          items: [
            { text: 'storage', link: '/packages/utils/storage/' }
          ]
        }
      ],
      '/packages/vue-use/': [
        {
          text: 'Introduction',
          link: '/packages/vue-use/'
        },
        {
          text: 'Composition API',
          items: [
            { text: 'useKeyboardDetector', link: '/packages/vue-use/use-keyboard-detector' },
            { text: 'useScrollParent', link: '/packages/vue-use/use-scroll-parent' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/preflower/use' }
    ],
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2025-present Ted Lin'
    }
  }
})
