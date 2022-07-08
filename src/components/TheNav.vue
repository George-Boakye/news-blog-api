<template>
  <nav>
    <figure class="ellipse">
        <img src="@/assets/polygon.svg" alt="">
    </figure>
    <div class="links">
    <router-link :to="{name:'global'}">Global</router-link>
    <router-link :to="{name:'technology', params:{id:'technology'}}">Technology</router-link>
    <router-link :to="{name:'business', params:{id:'business'}}">Business</router-link>
    <router-link :to="{name:'health', params:{id:'health'}}">Health</router-link>
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
    font-size: 20px;
    font-weight: bold;
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

@media screen and (max-width: 600px) {
    nav{
    padding: 20px;
   display: block;
    }
    a{
        display: block;
        margin-right: 0;
    }
    .links{
        text-align: center;
    }
    .menu{
        position: absolute;
        right:20px;
        top:20px;
    }
}
</style>