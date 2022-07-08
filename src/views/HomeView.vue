<template>
<form v-on:submit.prevent="searchNews()">
   <div class="search">
    <input type="text" placeholder="Search..." v-model="searchTerm" />
      <button>Search</button>
  </div>
</form>
  <Header :heading="newsHeading" />
  <Section :others="otherNews" />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/TheHeader.vue';
import Section from '@/components/TheMidSec.vue';

export default {
  name: 'HomeView',
  components: { Header, Section },
  data(){
    return{
       searchTerm: "",

    }
  },
  async created() {
    await this.globalNews('global')
    // console.log(this.getGlobalNews.articles)
  },
  computed: {
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
  methods: {
    ...mapActions({
      globalNews: 'globalNews'
    }),
    searchNews(){
      this.$router.push({name:'Search', params:{searched:this.searchTerm}})
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
   margin-left: 45px;
}
 .search input{
    border:none;
    outline: none;
  }
  .search button{
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>