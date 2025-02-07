<template>
  <button @click="login" v-if="!isAuthi">Login</button>
  <button @click="logout" v-if="isAuthi">Logout</button>
</template>
<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
  computed:{
    isAuthi(){
        return this.$store.getters.userIsAuth;
    }
  }
};
</script>