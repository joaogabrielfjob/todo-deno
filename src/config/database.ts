import { MongoClient } from './deps.ts'
import User from '../models/user.ts'
import { config } from '../config/deps.ts'

config({ export: true })

const client = new MongoClient()

const dbName = Deno.env.get('DB_NAME')!
const dbHost = Deno.env.get('DB_HOST')!
const dbPort = Deno.env.get('DB_PORT')!
const dbCredentialUsername = Deno.env.get('DB_CREDENTIAL_USERNAME')!
const dbCredentialPassword = Deno.env.get('DB_CREDENTIAL_PASSWORD')!

await client.connect({
  db: dbName,
  tls: true,
  servers: [
    {
      host: dbHost,
      port: +dbPort
    }
  ],
  credential: {
    username: dbCredentialUsername,
    password: dbCredentialPassword,
    db: dbName,
    mechanism: "SCRAM-SHA-1",
  }
})

const database = client.database(dbName)
const users = database.collection<User>("users")

export { users }