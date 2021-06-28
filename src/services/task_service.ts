import { tasks } from '../config/database.ts'
import Task from '../models/task.ts'

const getAllTasksByUserId = async (userId: string) => await tasks.find({ userId }, { noCursorTimeout: false }).toArray()

const createNewTask = async (task: Task) => await tasks.insertOne(task)

export { getAllTasksByUserId, createNewTask }
