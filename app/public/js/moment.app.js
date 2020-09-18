var app1 = new Vue({
  el: '#momentApp',
  data: {
    someDate: '1993-07-20T09:44:18.684Z'
  },
  methods: {
    formatDate(d) {
      return moment(d)
    }
  },
  created(){
    // fetch
  }
})
