const express = require('express')
const cors = require('cors')
const PORT = 4000
const sequelize = require('./sequelize')
const app = express()


app.use(express.json())
app.use(cors())

// endpoints
app.get('/api/getAllPosts', async (req, res) => {
   let allPosts = await sequelize.query(`
    SELECT * from posts
   `)
   res.status(200).send(allPosts[0]) 
})
app.get('/api/getFollow', async (req, res) => {
   let allFollow = await sequelize.query(`
    SELECT * from follow
   `)
   res.status(200).send(allFollow[0]) 
})

app.post('/api/addPost', async (req, res) => {
    let {text, date} = req.body
    await sequelize.query(`
    INSERT INTO posts(text, date)
    VALUES(
        '${text}',
        '${date}'
    )
    `)
    res.status(200).send("Successfully Added Post!")
})


app.listen(PORT, () => console.log(`listening on ${PORT}`))