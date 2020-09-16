var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    userList: [],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  created() {
    fetch("dummy/randomuser.me-sample.json")
    .then( response => response.json() )
    .then( json => {
      this.userList = json;

      console.log(json)}
    );
  }
})
