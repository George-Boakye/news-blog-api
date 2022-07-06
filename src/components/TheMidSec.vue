<template>
  <section>
  <p>Articles</p>
  <div class= "card-container">
    <div class="card" v-for="news in others" :key="news.title">
      <figure>
        <img :src="news.urlToImage" alt="">
      </figure>
      <div>
        <h2>{{news.title}}</h2>
        <p>{{longDate(news.publishedAt)}}</p>
        <p class="author">Author: {{news.author}}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name:'TheMidSec',
    props:['others'],
      computed:{
    longDate(){
      return (newDate) => {
        let date = new Date(newDate);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.toLocaleString('default', { weekday: 'long' });

        // (date.getMonth()+1)
       return month + ' '+date.getDate()+', ' +date.getFullYear() ;
      }
    }}

}
</script>

<style scoped>
 h2{
  margin-top: 16px;
    color: #000;
    width:264px;
    font-weight: 700;
font-size: 18px;
  }
  p{
      margin-top: 1rem;
    margin-bottom: 2rem;
    color: #000;
  }
section{
  padding: 96px 237px;
}
.card-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.card figure{
width: 264px;
height: 168px;
border-radius: 8px;
}
.card figure img{
  /* width:100%; */
  width: 264px;
height: 168px;
  border-radius: 8px;
  object-fit: fill;
}
</style>