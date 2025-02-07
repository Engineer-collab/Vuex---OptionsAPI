<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({value:10})">Add 11</button>
</template>


<script>
import { mapActions } from 'vuex';


export default {
    methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // }
   ...mapActions({
    inc:'numbers/increment',
    increase:'numbers/increase'
   })
  }
}
</script>

