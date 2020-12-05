<template>
  <b-navbar class="shadow style-title" toggleable="lg" :type="$store.getters.theme" :variant="$store.getters.theme">
    <div class="container">
      <b-navbar-brand href="#">To Do List</b-navbar-brand>

      <!--   Bouton permettant de changer le thème de l'application (avec les directives v-if et v-else   -->
      <b-navbar-nav class="ml-auto">
        <!--     Bouton set dark     -->
        <b-button v-on:click="$store.commit('changeTheme')" v-if="$store.getters.theme === 'light'"
                  variant="outline-dark">
          <b-icon icon="moon"></b-icon>
        </b-button>
        <!--     Bouton set light     -->
        <b-button v-on:click="$store.commit('changeTheme')" v-else variant="outline-light">
          <b-icon icon="sun"></b-icon>
        </b-button>
      </b-navbar-nav>

    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>