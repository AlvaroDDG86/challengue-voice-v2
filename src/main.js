import { createApp } from 'vue'
import './main.css'
import { createPinia } from 'pinia'
import BaseIcon from '@/components/BaseIcon.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseHeader from '@/components/BaseHeader.vue'
import App from './App.vue'

const app = createApp(App)
app.component('BaseIcon', BaseIcon)
app.component('BaseSelect', BaseSelect)
app.component('BaseInput', BaseInput)
app.component('BaseHeader', BaseHeader)
app.use(createPinia())
app.mount('#app')