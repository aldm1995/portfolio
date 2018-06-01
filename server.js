const express = require('express')
const serveStatic = require('serve-statis')
const path = require('path')
// create the express app
const app = express()
// create middleware to handle the servin g the app
app.use("/", serveStatic( path.join (_dirname, '/src')))
// serve index by default
app.get('/', function(req, res){
	res.sendFile(__dirname + '/src/index.html')
})
// create default port to serve the app on  
const port = process.env.PORT || 5000
app.listen(port)
// Log to feedback that this is actually running
console.log('Server started on port ' + port)