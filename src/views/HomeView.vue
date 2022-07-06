<template>
<Header :heading="newsHeading"/>
<Section :others="otherNews"/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/TheHeader.vue';
import Section from '@/components/TheMidSec.vue';

export default {
  name: 'HomeView',
  components: {Header,Section},
  async created(){
    await this.globalNews()
    // console.log(this.getGlobalNews.articles)
  },
  computed:{
    ...mapGetters({
      getGlobalNews:'getGlobalNews'
    }),
      newsHeading(){
       return this.getGlobalNews.slice(0,1);
    },
    otherNews(){
      return this.getGlobalNews.slice(1,10)
    },
  },
  methods:{
    ...mapActions({
      globalNews:'globalNews'
    })
  }
}
</script>
