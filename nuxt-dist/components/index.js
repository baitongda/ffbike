export { default as Avatar } from '../..\\components\\avatar.vue'
export { default as MountainsList } from '../..\\components\\MountainsList.vue'
export { default as Resource } from '../..\\components\\resource.vue'
export { default as TheFooter } from '../..\\components\\TheFooter.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as UserCard } from '../..\\components\\user-card.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
