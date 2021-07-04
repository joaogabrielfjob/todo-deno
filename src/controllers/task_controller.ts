import { Context } from "../config/deps.ts"
import { getAllTasksByUserId, createNewTask } from '../services/task_service.ts'

const getTasksByUserId = async (context: Context) => {
  try {
    const userId = context.request.url.searchParams.get('userId')!
    const data = await getAllTasksByUserId(userId)

    context.response.body = { "status": true, data: { tasks: data } }
    context.response.status = 200
  } catch (exception) {
    context.response.body = { status: false, data: null };
    context.response.status = 500;

    console.log(exception);
  }
}

const createTask = async (context: Context) => {
  try {
    const body = context.request.body()
    const { userId, title, description } = await body.value

    const id = await createNewTask(userId, title, description)

    context.response.body = { status: true, data: { taskId: id } }
    context.response.status = 201
  } catch (exception) {
    context.response.body = { status: false, data: null };
    context.response.status = 500

    console.log(exception);
  }
}

export { getTasksByUserId, createTask }