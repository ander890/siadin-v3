import axios from 'axios';
import { setHeaderToken } from '../../../utils/auth';

const state = {
    user: null,
    isLoggedIn: false,
};

const getters = {
    isLoggedIn (state){
        return state.isLoggedIn
    },
    user (state) {
        return state.user
    }
};

const actions = {
    login({ dispatch, commit }, data) {
        return new Promise((resolve) => { 
            localStorage.setItem('token', "123456") 
            setHeaderToken("123456")
            dispatch('get_user')
            commit('set_user', data) 
            resolve({"success": true})
        })
    },
    syncSSO({ dispatch, commit }, data) {
        return new Promise((resolve, reject) => { 
            axios.post('sync_sso', data)
            .then(response => {
                dispatch('get_user')
                resolve(response)
            })
            .catch(err => {
                commit('reset_user')  
                // localStorage.removeItem('token')
                reject(err)
          })
        })
    },
    async get_user(){ 
        if(!localStorage.getItem('token')){
          return
        }
        // try{ 
        //   let response = await axios.get('user')
        //     commit('set_user', response.data.data)
        // } catch (error){
        //     commit('reset_user') 
        //     this.removeHeaderToken()
        //     localStorage.removeItem('token')
        //     return error
        // }
    },
    async logout({commit}){
        commit('reset_user')  
        localStorage.removeItem('token')
    }
};

const mutations = {
    set_user (state, data) {
        state.user = data
        state.isLoggedIn = true
    },
    set_role (state, data) {
        state.role = data
    },
    reset_user (state) {
        state.user = null
        state.isLoggedIn = false
        state.role = null
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};