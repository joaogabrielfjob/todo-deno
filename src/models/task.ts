interface Task {
  _id: { $oid: string }
  title: string,
  description: string,
  status: string,
  createdAt: Date,
  updatedAt: Date
}

export default Task