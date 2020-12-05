import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // Thème actuel de l'application (default = 'light')
    state: {
        theme: localStorage.getItem('theme') || 'light',
    },
    mutations: {
        // Change le thème de l'application
        changeTheme(state) {
            if(state.theme === 'light'){
                localStorage.setItem('theme', 'dark')
                state.theme = localStorage.getItem('theme')
            }
            else {
                localStorage.setItem('theme', 'light')
                state.theme = localStorage.getItem('theme')
            }
        }
    },
    actions: {
    },
    modules: {
    },
    // getter pouvant être utilisé par n'importe quel composant
    getters: {
        theme: state => state.theme
    }
})