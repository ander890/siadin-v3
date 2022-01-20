<template>
  <div id="app">
    <div id="wrapper">
      <div v-if="isLoggedIn">
        <TopBar/>
        <link rel="stylesheet" 
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
            crossorigin="anonymous">
      </div>
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
      </div> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import store from './store'

export default {
  name: 'Home',
  components: {
    TopBar,
  },
  data: function () {
    return {
    }
  },
  created () {
    document.title = "SIADIN V3";
  },
  computed: {
    isLoggedIn(){ return store.state.auth.isLoggedIn  }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
