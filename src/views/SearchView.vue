<template>
<!-- <form v-on:submit.prevent="searchNews()">
   <div class="search">
    <input type="text" placeholder="Search..." v-model="searchTerm" />
  </div>
  <button>Search</button>
</form> -->
  <div @click="this.$router.push('/')"><p class="back">Back to home</p></div>
  <TheHeader :heading="newsHeading"/>
  <TheMidSec :others="otherNews"/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TheHeader from '@/components/TheHeader.vue'
import TheMidSec from '@/components/TheMidSec.vue'

export default {
name:'SearchView',
props:['searched'],
data(){
    return{
        searchTerm:''
    }
},
components:{
TheHeader,TheMidSec
},
  async created() {
    await this.globalNews(this.searched)
    // console.log(this.getGlobalNews.articles)
  },
  async updated(){
    await this.globalNews(this.searched)
  },
computed:{
     ...mapGetters({
      getGlobalNews: 'getGlobalNews'
    }),
    newsHeading() {
      return this.getGlobalNews.slice(0, 1);
    },
    otherNews() {
      return this.getGlobalNews.slice(1, 10)
    },
},
methods:{
     ...mapActions({
      globalNews: 'globalNews'
    }),
    searchNews(){
     this.searched = this.searchTerm
    }
}
}
</script>

<style scoped>
.search{
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 300px;
  height: 50px;
  text-align: center;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  }
  .search input{
    border:none;
    outline: none;
  }
  .back{
    color: #000;
  }
  div{
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    width: 120px;
      margin-left:40px;
      text-align: center;
      cursor: pointer;
}

</style>