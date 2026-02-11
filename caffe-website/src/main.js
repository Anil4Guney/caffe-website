import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import PrimeVue from 'primevue/config';


import 'primevue/resources/themes/aura-light-green/theme.css' 
import 'primeicons/primeicons.css' 
import './index.css' 


import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })


app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Sidebar', Sidebar);
app.component('InputText', InputText);
app.component('Card', Card);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);

app.mount('#app')