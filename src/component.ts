import { defineComponent, h, ref } from 'vue'
import './index.css'
export const component = defineComponent({
  name: 'ProgressiveImage',
  props: {
    tempSrc: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
  setup(props, { attrs }) {
    const isLoaded = ref(false)
    return () =>
      h('div', {
        ...attrs,
        class: `progressive-image-container ${isLoaded.value ? 'progressive-image-loaded' : ''}`,
      }, [
        h('img', {
          src: props.tempSrc,
          alt: props.alt,
          class: 'progressive-image-temp',
        }),
        h('img', {
          src: props.src,
          alt: props.alt,
          class: 'progressive-image-origin',
          onLoad: () => {
            isLoaded.value = true
          },
        }),
      ],
      )
  },
})
