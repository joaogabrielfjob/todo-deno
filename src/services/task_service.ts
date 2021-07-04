import { tasks } from '../config/database.ts'
import Task from '../models/task.ts'

const getAllTasksByUserId = async (userId: string) => await tasks.find({ userId }, { noCursorTimeout: false }).toArray()

const createNewTask = async (userId: string, title: string, description: string) => {
  const status = "DOING"
  const createdAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  const updatedAt = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

  const task: Task = {
    userId,
    title,
    description,
    status,
    createdAt,
    updatedAt
  }

  await tasks.insertOne(task)
}

export { getAllTasksByUserId, createNewTask }
