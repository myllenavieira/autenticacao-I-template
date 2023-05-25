import express from 'express'
import cors from 'cors'
import { productRouter } from './router/productRouter'
import { userRouter } from './router/userRouter'
import dotenv from 'dotenv'

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

app.use("/users", userRouter)
app.use("/products", productRouter)
