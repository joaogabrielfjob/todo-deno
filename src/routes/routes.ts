import { Router } from '../config/deps.ts'
import { getUsers, createUser } from "../controllers/user_controller.ts"

const router = new Router()

router
  .get("/users", getUsers)
  .post("/users", createUser)

export default router