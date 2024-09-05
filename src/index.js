const express = require("express")
const app = express();
const port = 3000

app.use(express.json())

app.use("", /*rota*/)

app.use("", /*rota*/)

app.use("", /*rota*/)


app.listen(port, () => {
    console.log(`Server running in http://localhost:${port} port`)
})
//deu certo