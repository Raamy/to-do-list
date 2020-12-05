<template>
  <div>
    <b-form @submit="addTask">
      <!--   Input qui permet à l'utilisateur de rentrer une tâche   -->
      <b-form-input :class="`mt-4 text-${reverseTheme()} bg-${$store.getters.theme}`" v-model="taskName"
                    placeholder="Enter task name"/>
      <!--   Bouton de type submit pour ajouter une tâche avec addTask()     -->
      <div class="mt-4 text-center">
        <b-button type="submit" :variant="taskName.length > 0 ? 'success' : 'danger'">
          Add to list
        </b-button>
      </div>
    </b-form>
    <!--  Affiche les tâches enregistrée avec le statut 'To do' (à faire)  -->
    <div class="text-left mt-4" v-for="(task, index) in tasks" v-bind:key="index">
      <div v-if="task.status !== 'done'">
        <div class="row">
          <div class="col">
            <p class="style-text">{{ task.title }}</p>
          </div>
          <div class="col-auto">
            <div class="float-right">
              <!--   Bouton pour rendre la tâche comme faite   -->
              <b-button v-b-tooltip.hover title="Set task to 'done'" v-on:click="setStatusDone(index)"
                        class="h2 mx-2" variant="outline-success">
                <b-icon icon="check2"></b-icon>
              </b-button>
              <!--   Bouton pour supprimer une tâche   -->
              <b-button v-b-tooltip.hover title="Erase task" v-on:click="deleteTask(index)" class="h2 mx-2"
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
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      taskName: '',
      tasks: [],
    }
  },
  methods: {
    // Actualise/Enregistre les tâches dans le localStorage
    updateTasks: function () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    // Ajoute une tâche
    addTask: function () {
      event.preventDefault();
      if(this.taskName.length > 0){
        this.tasks.push({
          title: this.taskName,
          status: 'todo'
        })
        this.updateTasks()
        // Efface le champ "Entrez une tâche"
        this.taskName = ''
      }
    },
    // Supprime un tâche
    deleteTask: function (index) {
      this.tasks.splice(index, 1)
      this.updateTasks()
    },
    // Change le statut d'une tâche à 'Done'
    setStatusDone: function (index) {
      this.tasks[index].status = 'done'
      this.updateTasks()
    },
    // Donne la couleur inverse selon le thème actuel
    reverseTheme: function () {
      if (this.$store.getters.theme === 'light') {
        return 'black'
      } else {
        return 'white'
      }
    }
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

.input-dark {
  background: rgb(24, 26, 27);
}

.hr-dark {
  border-color: gray;
}
</style>