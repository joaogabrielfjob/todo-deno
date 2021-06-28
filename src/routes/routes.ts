import { Router } from '../config/deps.ts'
import { getUsers, createUser } from "../controllers/user_controller.ts"
import { getTasksByUserId, createTask } from "../controllers/task_controller.ts"

const router = new Router()

router
  .get("/users", getUsers)
  .post("/users", createUser)

router
  .get("/tasks", getTasksByUserId)
  .post("/tasks", createTask)

export default router