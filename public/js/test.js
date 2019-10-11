new Vue({
  el: '#app',
  data: {
    items: [],
    page: 1,
    pages: [],
    url: 'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&per_page=10&page='
  },
  methods: {
    increment:function(){
       this.page++;
   },
   // get post from request using axios
   getPosts:function() {
    this.page++;
    //retrieve items from github 
    axios.get(this.url)
    .then(response => {

        this.items = response.data.items;
      })
      .catch(response => {
        console.log(response);
      });
  },
    // next navigation method 
    pageIncrement:function() {
      if(this.page<this.items.length){
        this.page++;
      }   
      else{
        this.page--;
      }
     
      //retrieve items from github 
      axios.get(this.url+this.page)
      .then(response => {

          this.items = response.data.items;
        })
        .catch(response => {
          console.log(response);
        });
    },
     // next previous method 
    pageDecrement:function() {
      if(this.page>1)
        { this.page--;}
      else{this.page++;}
      //retrieve items from github 
      axios.get(this.url+this.page)
      .then(response => {

          this.items = response.data.items;
        })
        .catch(response => {
          console.log(response);
        });
    },
  },
// display data
  mounted(){
    this.getPosts();
  }
})



