window._ = require('lodash');
window.Vue = require('vue');
import axios from 'axios';

Vue.component('example', require('./components/comp.vue'));

const app = new Vue({
    el: '#app',
    data: {
      posts: ""
    },
    methods: {
      testJSON: function(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data;
          console.log('success');
        })
        .catch(e => {
          this.errors.push(e);
        });
      }
    }
});
