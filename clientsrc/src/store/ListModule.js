import api from "../services/AxiosService"
import router from "../router"





export default {
    actions: {
        async addList({ commit, dispatch }, listData) {
            try {
                let res = await api.post("lists", listData)
                console.log(res.data)
                dispatch("getList", listData.boardId)
            } catch (error) {
                console.error(error);
            }
        },
        async getList({ commit, dispatch }, boardId) {
            try {
                let res = await api.get("boards/" + boardId + "/lists/")
                commit("setList", res.data)
            } catch (error) {
                console.error(error);
            }
        },
        async deleteList({ commit, dispatch }, listData) {
            try {
                let res = await api.delete("lists/" + listData.id)
                dispatch("getList", listData.boardId)
            } catch (error) {
                console.error(error);
            }
        }


    }










}