<template>
  <div>
    <!--  Si aucune tâche n'a le statut 'Done'  -->
    <div v-if="tasks === []">
      <h1 class="mt-4">Aucune tâche validé</h1>
    </div>
    <!--  Sinon, on les affiches  -->
    <div v-else>
      <div class="text-left mt-4" v-for="(task, index) in tasks" v-bind:key="index">
        <div v-if="task.status === 'done'">
          <div class="row">
            <div class="col style-text">
              {{ task.title }}
            </div>
            <div class="col-auto">
              <div class="float-right">
                <b-button v-b-tooltip.hover title="Erase done task" v-on:click="deleteTask(index)" class="h2 mx-2"
                          variant="outline-danger">
                  <b-icon icon="x"></b-icon>
                </b-button>
              </div>
            </div>
          </div>
          <hr :class="`hr-${$store.getters.theme}`">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoneList",
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    // Actualise/Enregistre les tâches dans le localStorage
    updateTasks: function () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    // Supprime une tâche qui à été faite
    deleteTask: function (index) {
      this.tasks.splice(index, 1)
      this.updateTasks()
    },
  },
  mounted() {
    // Récupère la liste des tâches enregistrée dans le localStorage s'il en existe
    if (localStorage.getItem('tasks') !== '') {
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }
  }
}
</script>

<style scoped>
.style-text {
  font-size: 24px;
}

.hr-dark {
  border-color: gray;
}
</style>