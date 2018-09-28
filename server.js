var express = require('express');
var bodyParser = require('body-parser');
var server_logger = require('./logs/node.logger.js'); 
var port = 3000
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname+'/public')); //Serves resources from public folder


app.get('/services', (req, res) => {
    res.json({"message": " EOS service", "Actions" : "-Stake -Unstake -ResourceInfo"});
});

// API EP 
require('./app/routes/node.routes.js')(app);

server_logger.info("Starting server")


app.listen(port, () => {
    server_logger.info("Server is listening on port: "+port);
})
