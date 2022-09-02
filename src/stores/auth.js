import api from '../utils/axios';
import { defineStore } from 'pinia';
import { useMessageStore } from '@/stores/message';



export const useAuthStore = defineStore( {
	id: 'auth',
	state: () => ( {
		user: {
			name: '',
			email: '',
			password: ''
		},
		isAuthenticated: localStorage.getItem( "isAuthenticated" ) ?? false,
		token: localStorage.getItem( "access_token" ),
	} ),

	actions: {
		async register () {
			await api.post( 'auth/register', this.user ).then( ( response ) => {
				console.log( response.data );
				this.setAccessToken( response.data.token );
				this.response.status = response.status;
			} ).catch( ( error ) => {
				console.log( error.response.data.message );
				this.message( error.response.data.messages ?? error.response.data.message );
			} );
		},

		async login () {
			await api.post( 'auth/login', this.user ).then( ( response ) => {
				this.setAccessToken( response.data.token );
			} ).catch( ( error ) => {
				this.message( error.response.data.messages ?? error.response.data.message );
			} );
		},

		logout () {
			localStorage.removeItem( "access_token" );
			localStorage.removeItem( "isAuthenticated" );
		},


		setAccessToken ( token ) {
			localStorage.setItem( "access_token", token );
			localStorage.setItem( "isAuthenticated", true );
		},

		message ( errors ) {
			const messageStore = useMessageStore();
			messageStore.errors = errors;
		}
	}
} );
