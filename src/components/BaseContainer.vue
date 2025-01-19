<template>
  <section>
    <h2>{{ title }}</h2>
    <the-counter></the-counter>
    
    <slot></slot>
  </section>
</template>

<script>
import TheCounter from './TheCounter.vue';

export default {
  components:{
    TheCounter
  },
  props: ['title'],
 

};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>