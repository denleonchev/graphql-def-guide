const express = require('express')
const expressGraphQL = require('express-graphql')

const schema = require('./schema/schema')
const app = express()

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
})
)

app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Listening carefully to ${process.env.PORT}`)
})