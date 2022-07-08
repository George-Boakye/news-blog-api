<template>
  <header v-for="header in heading" :key="header">
  <div class="img-cover" @click="this.$router.push({name:'NewsPage',params:{title:header.title,id:this.$route.name}})">
    <figure class="hero-img" ><img :src="header.urlToImage" alt=""></figure>
  </div>
  <div class="purple">
    <h1>{{header.title}}</h1>
    <p class="header-p">{{longDate(header.publishedAt)}}</p>
    <div>
      <figure></figure>
      <p class="header-p">{{header.author}}</p>
    </div>
  </div>
</header>
</template>

<script>
export default {
    name:'TheHeader',
    props:['heading'],
    computed:{
    longDate(){
      return (newDate) => {
        let date = new Date(newDate);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.toLocaleString('default', { weekday: 'long' });
       return month + ' '+date.getDate()+', ' +date.getFullYear() ;
      }
    },
   },
    }
</script>

<style scoped>
h1{
  text-align: left;
  width:33.5625rem ;
  }
  h2{
    color: #000;
    width:16.5rem;
    font-weight: 700;
font-size: 18px;
  }
  p{
    margin-top: 1rem;
    margin-bottom: 2rem;
    color: #000;
  }
  .header-p{
    color:#fff
  }
.purple{
  padding: 9.25rem 0 3.3125rem 14.8125rem;
  background-color:  #6B0B5B;
  margin-top: 430px;
  text-align: left;
}
.hero-img{
  /* height: 400px; */
  width:966px;
  position: absolute;
  top: 148px;
  left: 237px;
   /* top: 228px; */
  /* object-fit: contain; */
  margin:0 auto;
 
  border-radius: 8px;
}
.img-cover{
  cursor: pointer;
/* position: relative;
margin: 0 auto;
height: 500px;
  width:966px; */
} 
.hero-img img{
/*     
  width: 100%; */
   /* height: 400px;
  width:966px; */
   width: 100%;
    height: 500px;
  object-fit: fill;
border-radius: 8px;
}

@media screen and (max-width: 600px) {
  .purple{
     padding: 20px;
     margin-top:0;
  }
  .hero-img{
    margin-top: 10px;
    width: 100%;
    height: 150px;
    position: static;
    padding: 20px;
  }
  .hero-img img{
    height: fit-content;
  }
  h1,h2{
    width: 100%;
    font-size: 1.25rem;
  }
}
</style>