import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        updateFirebaseAuth (state, user) {
            state.user = user
        }
    }
});

export default store
