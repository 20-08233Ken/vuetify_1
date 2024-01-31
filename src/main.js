import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const app = createApp(App)
app.use(vuetify)
app.use(Vueform, vueformConfig)
app.mount('#app')

// createApp(App).
// use(vuetify).
// mount('#app')