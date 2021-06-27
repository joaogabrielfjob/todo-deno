import app from './config/app.ts'
import { config } from './config/deps.ts'

config({ export: true })

const port = Deno.env.get('PORT')!

app.listen({ port: +port })

console.log("Server started on port", port)