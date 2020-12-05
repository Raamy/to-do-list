<template>
  <div>
    <div class="container">
      <h1 class="style-title pt-4">To Do List</h1>
      <br>
      <!--      -->
      <b-nav :class="`style-title nav-${$store.getters.theme}`" tabs small>
        <b-nav-item v-on:click="changeTabs" :active="ToDoTab">To Do List</b-nav-item>
        <b-nav-item v-on:click="changeTabs" :active="DoneTab">Done List</b-nav-item>
      </b-nav>
      <!--   Affiche la liste des tâches à faire   -->
      <div v-if="ToDoTab">
        <ToDoList/>
      </div>
      <!--   Affiche la liste des tâches déjà faites   -->
      <div v-else>
        <DoneList/>
      </div>
    </div>
  </div>
</template>

<script>
import DoneList from "@/components/DoneList";
import ToDoList from "@/components/ToDoList";

export default {
  name: "Home",
  components: {ToDoList, DoneList},
  data() {
    return {
      // Correspond aux onglets "To do list" et "Done list"
      // Affiche ces listes selon la valeur booléenne
      ToDoTab: true,
      DoneTab: false
    }
  },
  // Permet de changer d'onglets
  methods: {
    changeTabs: function () {
      this.ToDoTab = !this.ToDoTab
      this.DoneTab = !this.DoneTab
    },
  }
}
</script>

<style scoped>
.nav-dark {
  border-color: gray;
}

.nav-dark > .nav-item > .active {
  background-color: #1b1e1f;
  border-color: gray;
  color: white;
}

.style-nav-item {
  text-decoration: none;
}
</style>