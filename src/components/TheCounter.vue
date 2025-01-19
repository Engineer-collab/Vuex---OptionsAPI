<template>
    <h3>{{ counter }}</h3>
    <button @click="add">Add 1</button>
</template>
<script>


export default {
    computed:{
    counter(){
        return this.$store.state.counter;
    } 
    },
    methods:{

    add(){
      this.$store.state.counter++;
    }
  }
}
</script>