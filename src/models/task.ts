interface Task {
  _id?: { $oid: string }
  userId: string,
  title: string,
  description: string,
  status: string,
  createdAt: string,
  updatedAt: string
}

export default Task