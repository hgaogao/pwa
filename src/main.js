import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
const app = createApp(App)

app.use(store)
app.use(router)
app.use(Button)
app.use(Tabbar);
app.use(TabbarItem);


app.mount('#app')