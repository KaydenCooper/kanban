import api from "../services/AxiosService"
import router from "../router"





export default {
    actions: {
        async addList({ commit, dispatch }, listData) {
            try {
                let res = await api.post("lists", listData)
                console.log(res.data)
                dispatch("getList")
            } catch (error) {
                console.error(error);
            }
        },


        async getList({ commit, dispatch }, boardId) {
            try {
                let res = await api.get("lists", boardId)
                commit("setList", res.data)
            } catch (error) {
                console.error(error);
            }
        },
        async deleteList({ commit, dispatch }, id) {
            try {
                let res = await api.delete("lists/" + id)
                dispatch("getList")
            } catch (error) {
                console.error(error);
            }
        }


    }










}