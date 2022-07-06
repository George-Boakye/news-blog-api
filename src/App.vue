<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/TheNav.vue'
export default{
  components:{
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
 font-family: 'Public Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
</style>
