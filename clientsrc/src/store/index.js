import Vue from 'vue'
import Vuex from 'vuex'
import api from "../services/AxiosService"
import router from '../router/index'
import { STATES } from "mongoose"
import ListModule from "./ListModule"
import TaskModule from "./TaskModule"

Vue.use(Vuex)




export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    lists: {},
    tasks: {},
    activeBoard: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, activeBoard) {
      state.activeBoard = activeBoard
    },
    setList(state, lists) {
      state.lists = lists
    },
    setTasks(state, payload) {
      Vue.set(state.tasks, payload.listId, payload.tasks)
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    async getBoard({ commit, dispatch }, boardId) {
      try {
        let res = await api.get("boards/" + boardId)
        console.log(res.data)
        commit("setActiveBoard", res.data)
      } catch (error) {

      }
    },
    async deleteBoard({ commit, dispatch }, boardData) {
      try {
        let res = await api.delete("boards/" + boardData)
        console.log(res);
        commit("setActiveBoard", {})
        dispatch("getBoards")
      } catch (error) {
        console.error(error)
      }
    }
    //#endregion


    //#region -- LISTS --



    //#endregion
  },
  modules: {
    ListModule,
    TaskModule

  }
})
