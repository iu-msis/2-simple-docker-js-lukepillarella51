var commentInfo = new Vue({
  el: '#commentInfo',
  data: {
    commentList: [{
      id:'',
      commentText:''
    }],
    newCommentForm: {
      id:'',
      commentText:''
    }
},

  methods: {

    fetchComment(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json =>{
        this.commentList=json;
        console.log(this.commentList);
      });
    },

    creatNewComment() {
      fetch('api/comments/create.php', {
        method:'POST',
        body: JSON.stringify(this.newCommentForm),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);

        this.commentList = json;
        this.newCommentForm = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCommentForm);
    },
    newCommentData() {
      return {
        id:'',
        commentText:''
      }
    }
},

  created(){
    this.fetchComment();

  }
})
