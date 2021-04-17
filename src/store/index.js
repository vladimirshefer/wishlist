import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        user: null,
        profile: null,
        _profileUnsubscribe: function () {
        },
    },
    mutations: {
        updateFirebaseAuth(state, user) {
            state.user = user
            if (!user) {
                this.state.profile = null
            }
        },
        setUserProfile(state, profile) {
            state.profile = profile
        },
        setUserProfileUnsubscribe(state, unsubscribe) {
            state._profileUnsubscribe = unsubscribe
        },
    },
    actions: {}
});

export default store
