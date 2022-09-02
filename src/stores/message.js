import { defineStore } from 'pinia';
import axios from 'axios';

export const useMessageStore = defineStore( {
	id: 'message',
	state: () => ( {
		errors: {}
	} ),

	actions: {
		clearMessage () {
			this.errors = {}
		}
	}
} );
