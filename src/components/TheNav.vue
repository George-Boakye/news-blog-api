<template>
  <nav>
    <figure class="ellipse">
        <img src="@/assets/polygon.svg" alt="">
    </figure>
    <div class="links">
    <router-link :to="{name:'Home'}">Global</router-link>
    <router-link :to="{name:'Technology'}">Technology</router-link>
    <router-link :to="{name:'Business'}">Business</router-link>
    <router-link :to="{name:'Health'}">Health</router-link>
    </div>
    <div class="menu">
    <p>Menu</p>
    <figure><img src="@/assets/menu.svg" alt=""></figure>
    </div>
  </nav>
</template>

<script>
export default {
    name:'TheNav'
}
</script>

<style scoped>
nav{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 38px;
}
a{
    text-decoration: none;
    margin-right: 3.5rem;
    color: black;
}
.ellipse{
    width: 35px;
    height: 35px;
    background: #6B0B5B;
    border-radius: 17px;
    text-align: center;
}
.router-link-active{
    color:  #6B0B5B;
}
.menu{
    display:flex;
    align-items: center;
}
.menu figure{
    margin-left:1rem;
}
p{
    color:#000;
}
</style>