import Task from './task.ts'

interface User {
  _id?: { $oid: string }
  email: string,
  password: string,
  name: string,
  tasks?: Task
}

export default User