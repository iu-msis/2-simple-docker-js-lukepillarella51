var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    userName:'',
    userCountry:'',
    userDOB:'',
    userAge:'',
    userEmail:'',
    userImgLarge:'',
    userImgThumb:''
},

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },

    formatDate(d) {
      return moment(d).format("MMM DD, YYYY");
    }
  },
  created() {
    fetch('https://randomuser.me/api/')
    .then( response => response.json() )
    .then( json => {
      var userList = json.results[0];
      console.log(userList);

      this.userName = userList.name.first + " " + userList.name.last;
      this.userCountry = userList.location.country;
      this.userDOB = userList.dob.date;
      this.userAge = userList.dob.age;
      this.userEmail = userList.email;
      this.userImgLarge = userList.picture.large;
      this.userImgThumb = userList.picture.thumbnail;

  });
}
})
