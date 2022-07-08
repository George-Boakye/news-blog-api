<template>
<Header :heading="techHeading"/>
<Section :others="otherTechNews" />
</template>

<script>
import Header from '@/components/TheHeader.vue'
import Section from '@/components/TheMidSec.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'TechnologyView',
    components:{
        Header,Section
    },
    async created(){
        await this.categoryNews('technology');
    },
    computed:{
        ...mapGetters({
          getTechNews:'getCategoryNews'
        }),
       techHeading(){
            return this.getTechNews.slice(0,1)
        },
        otherTechNews(){
      return this.getTechNews.slice(1,10);
    }
    },
    methods:{
        ...mapActions({categoryNews : 'categoryNews'})
    }
}
</script>
