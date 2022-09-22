import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls"

var ls = new SecureLS({encodingType: 'HmacSHA1'});


export default createStore({
    state: {
        user: null,
        saltKey: "booklike123!456?"
    },
    mutations: {
        setUser(state,user){
            state.user = user
        },
        logout(state){
            state.user = null
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
    plugins:[
        createPersistedState({
            key : "bookmarkUser",
            storage: {
              getItem: (key) => ls.get(key),
              setItem: (key, value) => ls.set(key, value),
              removeItem: (key) => ls.remove(key),
            },
          }),
    ]
})