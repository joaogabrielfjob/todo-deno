import app from './config/app.ts'
import { config, flags } from './config/deps.ts'

config({ export: true })

const { args } = Deno
const argPort = flags.parse(args).port
const port = argPort ? argPort : Deno.env.get('PORT')!

await app.listen({ port: +port })

console.log("Server started on port", port)