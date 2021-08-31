const express = require("express");
const app = express();
const routers = require('./routers');
const messages = require('./messages/messages');


// route dosyalarını ayrı bir dosyada toplayan wrapper dosya. Bu sayede app.js dosyası karmaşıklıktan kurtuluyor.
app.use(routers.pokemonRouter);


// API endpoint'i bulunamaması halinde kullanılan error handler.
app.use((req,res,next) => {
    res.status(404).send(messages.notFound);
})

module.exports = app;