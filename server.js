const app = require("./src/app");

const PORT = 3055;

const sever = app.listen( PORT, () => {
    console.log(`Server Running at: ${PORT} `)
})

process.on('SIGINT', () => {
    sever.close( () => console.log(`Server Exit Express`) )
}) 
