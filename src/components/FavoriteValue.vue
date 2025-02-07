<template>
    <h3>{{ counter }}</h3>
    <h3>Add more...</h3>
    
</template>
<script>


export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
 
}
</script>