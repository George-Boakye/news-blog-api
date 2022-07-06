<template>
<Header :heading="healthHeading"/>
<Section :others="otherTechNews" />
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Section from '@/components/TheMidSec.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'HealthView',
    components:{
        Header,Section
    },
    async created(){
        await this.categoryNews('health');
    },
    computed:{
        ...mapGetters({
          getNews:'getCategoryNews'
        }),
       healthHeading(){
            return this.getNews.slice(0,1)
        },
        otherTechNews(){
      return this.getNews.slice(1,10);
    }
    },
    methods:{
        ...mapActions({categoryNews : 'categoryNews'})
    }
}
</script>