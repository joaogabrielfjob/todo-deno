interface User {
  _id?: { $oid: string }
  email: string,
  password: string,
  name: string
}

export default User