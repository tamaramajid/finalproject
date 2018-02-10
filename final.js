var vueusers=new Vue ({
  el:'#vue' ,
  data:{

items:[]
  },

  methods:{
      getall:function() {
        $.ajax({
          url:'https://jsonplaceholder.typicode.com/users' ,
          method:'GET',
          success:function(res){
            vueusers.items=res
              }

        })
      }

    },
    created:function(){
      this.getall()
    }
  })
