<template>
  <section>
    <base-container title="Vuex" v-if="isAuthi">
    <the-counter></the-counter>

    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>

    <change-counter></change-counter>
  </base-container>
    
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
  computed:{
    isAuthi(){
        return this.$store.getters.userIsAuth;
    }
  }
};
</script>

<style>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>