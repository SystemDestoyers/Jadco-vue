import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './routes';

// Create Vue Router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }
        return { top: 0 };
    }
});

// Create and mount the Vue app
const app = createApp(App);
app.use(router);
app.mount('#app'); 