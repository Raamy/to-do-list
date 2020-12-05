<template>
  <div :id="$store.getters.theme === 'light' ? 'app-light' : 'app-dark'">
    <Navbar/>
    <Home/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
  },
  mounted() {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light')
    }
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', '')
    }
  }
}
</script>

<style lang="scss">
/* Font from Google Fonts API*/
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

// Change du thème bootstrap
@import './assets/custom.scss';

/* CSS Light Theme */
#app-light {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  color: #2c3e50;
}

/* CSS Dark Theme */
#app-dark {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  color: rgb(174, 194, 211);
  background-color: rgb(24, 26, 27);
}

/* Change de police pour les titres*/
.style-title {
  font-family: 'Fredoka One', cursive;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
