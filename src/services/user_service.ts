import { users } from '../config/database.ts'
import User from '../models/user.ts'

const getAllUsers = async () => await users.find({}, { noCursorTimeout: false }).toArray()

const createNewUser = async (user: User) => await users.insertOne(user)

export { getAllUsers, createNewUser }