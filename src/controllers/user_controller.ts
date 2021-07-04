import { Context } from "../config/deps.ts"
import { getAllUsers, createNewUser } from '../services/user_service.ts'

const getUsers = async (context: Context) => {
  try {
    const data = await getAllUsers()

    context.response.body = { "status": true, data: { users: data } }
    context.response.status = 200
  } catch (exception) {
    context.response.body = { status: false, data: null };
    context.response.status = 500;

    console.log(exception);
  }
}

const createUser = async (context: Context) => {
  try {
    const body = context.request.body()
    const { email, password, name } = await body.value

    const id = await createNewUser(email, password, name)

    context.response.body = { status: true, data: { userId: id } }
    context.response.status = 201
  } catch (exception) {
    context.response.body = { status: false, data: null };
    context.response.status = 500

    console.log(exception);
  }
}

export { getUsers, createUser }