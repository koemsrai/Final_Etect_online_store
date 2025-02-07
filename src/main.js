import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'sass'
import '../src/scss/color.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './routes/route'
import 'swiper/css';
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS.init();
createApp(App).use(router).mount('#app')
