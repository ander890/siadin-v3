import axios from 'axios';
//import { setHeaderToken } from '../../../utils/auth';

const state = {

};

const getters = {

};

const actions = {
    get_progress({commit}) {
        return new Promise((resolve, reject) => { 
            axios.get('my/progress')
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    get_category({commit}, data = "") {
        return new Promise((resolve, reject) => { 
            let url = 'my/ekstra/category'
            if(data){
                url += "?parent_id="+data
            }
            axios.get(url)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    get_required_submission({commit}) {
        return new Promise((resolve, reject) => { 
            axios.get('my/submission')
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    get_ekstra({commit}, page = "") {
        return new Promise((resolve, reject) => { 
            let url = 'my/ekstra'
            if(page){
                url += "?page="+page
            }
            axios.get(url)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    add_ekstra({ commit }, data) {
        return new Promise((resolve, reject) => { 
            axios.post('my/ekstra', data)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    delete_ekstra({ commit }, data) {
        return new Promise((resolve, reject) => { 
            axios.delete('my/ekstra?id=' + data)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    delete_submission_file({ commit }, data) {
        return new Promise((resolve, reject) => { 
            axios.delete('my/submissionFile?id=' + data)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                if(err.response.status == "401"){
                    commit('reset_user')  
                    localStorage.removeItem('token')
                }
                reject(err)
          })
        })
    },
    submit_submission({ commit }, data) {
        return new Promise((resolve, reject) => { 
            axios.post('my/submission', data)
            .then(response => {
                resolve(response)
            })
            .catch(err => {
                commit('reset_user')  
                localStorage.removeItem('token')
                reject(err)
          })
        })
    },
};

const mutations = {
};

export default {
  state,
  getters,
  actions,
  mutations
};