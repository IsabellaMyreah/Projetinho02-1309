const express = require("express");
const port = 3334

const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);

app.listen(port, () => console.log (`O Servidor está rodando na porta ${port}!😍`));