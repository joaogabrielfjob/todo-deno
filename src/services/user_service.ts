import { users } from '../config/database.ts'
import User from '../models/user.ts'

const getAllUsers = async () => await users.find({}, { noCursorTimeout: false }).toArray()

const createNewUser = async (email: string, password: string, name: string) => {
  const user: User = {
    email,
    password,
    name
  }

  await users.insertOne(user)
}

export { getAllUsers, createNewUser }