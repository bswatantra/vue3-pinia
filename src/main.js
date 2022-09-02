import App from './App.vue';
import router from './router';
import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import '@/assets/main.css';



const pinia = createPinia();
pinia.use( ( { store } ) => {
	store.router = markRaw( router );
} );
const app = createApp( App );
app.use( router ).use( pinia ).mount( '#app' );
