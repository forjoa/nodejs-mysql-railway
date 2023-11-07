import express from 'express'
import { conn } from './db.js'

import { PORT } from './config.js'

const app = express()

app.get('/', async (req, res) => {
    const [result] = await conn.query('SELECT * FROM users');
    res.json(result)
})

app.get('/ping', async (req, res) => {
    const [result] = await conn.query(`SELECT "hello world" as RESULT`)

    res.json(result[0])
})

app.get('/create', async (req, res) => {
    const result = await conn.query('INSERT INTO users(name) VALUES("Joa")')

    res.json(result[0].affectedRows) 
})

app.listen(PORT)
console.log(`server on port ${PORT}`)