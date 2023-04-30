const express = require("express")
const models = require("./models/models")
const fileUpload = require("express-fileupload")
const sequelize = require("./db")
const cors = require("cors")
const router = require("./routes/index")
const errorHandler = require("./midlleware/errorHandlingMiddleware")
const path = require("path")


const PORT = 5000

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use(cors())
app.use("/api", router)


app.use(errorHandler)


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