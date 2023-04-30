const express = require("express")
const models = require("./models/models")
const sequelize = require("./db")
const cors = require("cors")


const PORT = 5000

const app = express()
app.use(express.json())
app.use(cors())



app.get("/", (req, res) => {
    res.status(200).json({
        message: "Ok"
    })
})











const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync();
        console.log("All models were synchronized successfully.");
        app.listen(PORT, () => {
            console.log("Server started at port: " + PORT)
        })
    } catch (error) {
        console.log(error + "28 line code. index.js")
    }
}

start()