<template>
<div @click="this.$router.go(-1)"><p class="back">back</p></div>
<transition>
    <section>
    <figure><img :src="getData.urlToImage" alt=""></figure>
     <h1>{{getData.title}}</h1>
   <p>{{getData.description}}</p>
   <a :href="getData.url" target="_blank">Click here to read full story</a>
   <p class="author">{{getData.author}}</p>
</section>
</transition>
<h2>
   
</h2>
 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'NewsPageView',
    props:['title', 'id'],
    async created(){
        await this.allNews(this.id);
    },
    computed:{
         ...mapGetters({
      getAllNews:'getAllNews'
    }),
    getData(){
     return this.getAllNews.find(element => element.title === this.title)
    }
               
    },
    methods:{
        ...mapActions({
      allNews:'everyNews'
    })
    }
}
</script>
<style scoped>
section{
    padding: 0px 237px  50px;}
h1{
    color: #000;
    width:600px;
    margin-bottom:20px
}
p{
    color:#000;
    margin-bottom: 10px;
}
figure{
    margin: 30px auto;
}
figure img{
    width: 100%;
    height: 500px;
    object-fit: fill;
}
a{
    text-decoration: none;
    color:  #6B0B5B;
}
.author{
    margin-top: 15px;
    font-size: 20px;
    font-weight: 800;
    color: #6B0B5B;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
div{
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    width: 80px;
      margin-left:40px;
      text-align: center;
      cursor: pointer;
}
.back{
    color: #000;
  
  }

  @media screen and (max-width: 600px) {
    section{
        padding:20px;
    }
    figure img{
        height: 200px;
    }
    h1{
        width: 100%;
    }
  }
</style>