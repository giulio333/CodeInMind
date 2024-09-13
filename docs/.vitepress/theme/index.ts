// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import NoteComponent from '../components/NoteComponent.vue'
import ExerciseComponent from '../components/ExerciseComponent.vue'
import ImageComponent from '../components/ImageComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('NoteComponent', NoteComponent)
    app.component('ExerciseComponent', ExerciseComponent)
    app.component('ImageComponent', ImageComponent)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

} satisfies Theme
