<template>
  <Header :heading="businessHeading" />
  <Section :others="otherNews"/>

</template>

<script>
import Header from '@/components/TheHeader.vue'
import Section from '@/components/TheMidSec.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
    components:{
        Header,Section
    },
    name:'BusinessView',
    async created(){
        await this.categoryNews('business');
    },
    computed:{
        ...mapGetters({
          getBusinessNews:'getCategoryNews'
        }),
        businessHeading(){
            return this.getBusinessNews.slice(0,1)
        },
        otherNews(){
      return this.getBusinessNews.slice(1,10);
    }
    },
    methods:{
        ...mapActions({categoryNews : 'categoryNews'})
    }
}
</script>
