import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class TasksService {
    async deleteComment(id, commentId) {
        return await dbContext.Tasks.findByIdAndUpdate(
            { _id: id, "comments._id": commentId },
            { $pull: { comments: { _id: commentId } } },
            { new: true }
        )
    }
    async editComment(id, commentId, body) {
        return await dbContext.Tasks.updateOne(
            { _id: id, "comments._id": commentId },
            { $set: { comments: body } },
            { new: true }
        )
    }
    async addComment(id, body) {
        return await dbContext.Tasks.findByIdAndUpdate(
            { _id: id },
            { $addToSet: { comments: body } },
            { new: true })
    }

    async find(query = {}) {
        let tasks = await dbContext.Tasks.find(query)
        return tasks
    }
    async getById(id, userEmail) {
        let data = await dbContext.Tasks.findOne({ _id: id, creatorEmail: userEmail })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board")
        }
        return data
    }

    async create(rawData) {
        let data = await dbContext.Tasks.create(rawData)
        return data
    }

    async edit(id, userEmail, update) {
        let data = await dbContext.Tasks.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board");
        }
        return data;
    }

    async delete(id, userEmail) {
        let data = await dbContext.Tasks.findOneAndRemove({ _id: id, creatorEmail: userEmail });
        if (!data) {
            throw new BadRequest("Invalid ID or you do not own this board");
        }
    }

}


export const tasksService = new TasksService()