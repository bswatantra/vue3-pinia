import { defineStore } from 'pinia'
import api from '../utils/axios';

export const useBlogStore = defineStore({
  id: 'blog',
  state: () => ({
    blogs: {}
  }),
 
  actions: {
    fetchBlogs () {
		api.get( 'panel/blogs' ).then( ( response ) => {
			this.blogs = response.data.blogs;
		} );
	}
  }
})
