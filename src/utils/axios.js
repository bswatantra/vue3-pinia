import axios from "axios";
import { useAuthStore } from '@/stores/auth';




const api = axios.create( {
	// baseURL: `${import.meta.env.API_BASE_URL}/api`
	baseURL: 'https://api.freerealapi.com/',
	// timeout: 1000,
} );

api.interceptors.request.use( config => {
	const authStore = useAuthStore();
	config.headers.Authorization = `Bearer ${ authStore.token }`;
	return config;
} );

// api.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response.status === 401) {
//         sessionStorage.removeItem('TOKEN')
//         router.push({name: 'Login'}).then(r => {
//         })
//     } else if (error.response.status === 404) {
//         router.push({name: 'NotFound'}).then(r => {
//         })
//     }
//     return error;
// })

export default api;
