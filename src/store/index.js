import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    globalNews:[],
    categoryNews:[],
  },
  getters: {
    getGlobalNews:(state) => state.globalNews,
    getCategoryNews: (state)=> state.categoryNews,
    },
  mutations: {
    SET_GLOBAL_NEWS(state,payload){
      state.globalNews = payload;
    },
    SET_CATEGORY_NEWS(state,payload){
      state.categoryNews =payload;
    }
  },
  actions: {
    async globalNews({commit}){
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=global&from=2022-07-06&apiKey=130b62210d6b49edad5121d3e70a6072')
        commit('SET_GLOBAL_NEWS',response.data.articles)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    async categoryNews({commit}, category){
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=130b62210d6b49edad5121d3e70a6072`)
        commit('SET_CATEGORY_NEWS',response.data.articles);
        return response
      } catch (error) {
        console.log(error)
      }
    },

  },
  modules: {
  }
})
