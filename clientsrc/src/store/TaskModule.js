import api from "../services/AxiosService"
import router from "../router"

export default {
    actions: {

        async getTasks({ commit, dispatch }, listId) {
            try {
                let res = await api.get("lists/" + listId + "/tasks/")
                commit("setTasks", { tasks: res.data, listId: listId })
            } catch (error) {
                console.error(error)
            }
        },

        async addTask({ commit, dispatch }, taskData) {
            try {
                let res = await api.post("tasks", taskData)
                dispatch("getTasks", taskData.listId)
            } catch (error) {
                console.error(error);
            }
        },
        async deleteTask({ commit, dispatch }, taskData) {
            try {
                let res = await api.delete("tasks/" + taskData.id)
                dispatch("getTasks", taskData.listId)
            } catch (error) {
                console.error(error)
            }
        },
        async addComment({ commit, dispatch }, commentData) {
            try {

                let res = await api.post("tasks/" + commentData.taskId + "/comments", commentData)
                dispatch("getTasks", commentData.listId)
            } catch (error) {
                console.error(error)
            }
        },
        async deleteComment({ commit, dispatch }, commentedData) {
            try {
                debugger
                let res = await api.delete("tasks/" + commentedData.taskId + "/comments/" + commentedData.id.id)
                dispatch("getTasks", commentedData.taskId)
            } catch (error) {
                console.error(error)
            }
        },
        setTaskToMove({ commit, dispatch }, data) {
            try {
                commit("setTaskToMove", data)

            } catch (error) {
                console.error(error);
            }
        },
        moveTask({ commit, dispatch }, moveData) {
            try {
                moveData.taskToMove.listId = moveData.newListId
                console.log(moveData);
                let res = api.put("tasks/" + moveData.taskToMove.id, moveData.taskToMove)
                dispatch("getTasks", moveData.newListId)
                dispatch("getTasks", moveData.oldListId)
            } catch (error) {
                console.error(error);
            }
        }


    }






}