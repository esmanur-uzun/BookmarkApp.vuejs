import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"


export default createStore({
    state: {
        user: null,
        saltKey: "booklike123!456?"
    },
    mutations: {
        setUser(state,user){
            state.user = user
        }
    },
    getters:{
        _isAuthenticated : state => state.user !== null,
        _getCurrentUser(state){
            const user = state.user
            delete user?.password
            return user
        },
        _saltKey : state => state.saltKey
    },
    plugins:[createPersistedState()]
})