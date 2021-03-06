var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Listening at port ' + port);