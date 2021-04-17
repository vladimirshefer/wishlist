import Vue from "vue";
import Vuex from "vuex";
import profileService from "@/services/profileService";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        user: null,
        profile: null,
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
    },
    actions: {
        async reloadUserProfile(context) {
            let userProfileOrNull;
            if (context.state.user) {
                userProfileOrNull = await profileService.getUserProfileOrNull(context.state.user.uid)
            } else {
                userProfileOrNull = null
            }

            context.commit("setUserProfile", userProfileOrNull)
        }
    }
});

export default store
