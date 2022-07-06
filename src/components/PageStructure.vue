<template>
  <header>
    <slot name="header">
      <figure>
        <slot name="heroImg"></slot>
      </figure>
      <div class="purple">
         <slot name="purple"></slot>
      </div>
    </slot>
  </header>
  <section>
    <div class="card-container">
      <slot name="cardContainer">
        <div class="card">
          <slot name="card"></slot>
        </div>
      </slot>
    </div>
    
  </section>
</template>

<script>
export default {
  name:'PageStructure.vue'

}
</script>

<style scoped>
h1{
  text-align: left;
  width:33.5625rem ;
  }
  p{
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
.purple{
  padding: 9.25rem 14.8125rem;
  background-color:  #6B0B5B;
  margin-top: 23.0625rem;
  text-align: left;
}
.hero-img{
  border: 1px solid black;
  height: 25rem;
  width:60.375rem;
  margin:0 auto;
  position: absolute;
  top: 128px;
  left:237px;
}
section{
  padding: 6rem 14.8125rem;
}
</style>