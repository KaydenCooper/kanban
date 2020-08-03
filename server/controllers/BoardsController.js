import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { boardService } from '../services/BoardService'
import { listService } from '../services/ListService';



//PUBLIC
export class BoardsController extends BaseController {
  constructor() {
    super("api/boards")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .get('/:id/lists', this.getList)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getList(req, res, next) {
    try {
      return res.send(await listService.find({ boardId: req.params.id, creatorEmail: req.userInfo.email }))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await boardService.find({ creatorEmail: req.userInfo.email })
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await boardService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await boardService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await boardService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await boardService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


