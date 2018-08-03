const express = require('express')
const path = require('path')
const socket = require('socket.io')
/*the const is for making a variable
the variable is named express
the equal sign is giving the variable a function
the function is to get a file hence require
the name of the file is identified in the parenthesis and the quotation marks
the file name is express
very similar to a link

*/
const app= express()
 /* variable called app
 */

const server= app.listen(4000)



app.use(express.static('client'))
app.get('/contactList',function(req,res){
  res.sendFile(path.join(__dirname,'/client/contact.html'))
})

/* variable called server
server is equal to listening to our local port 4000
*/
/*app.get('/',function(req,res){res.send('hello there')})

app.get('/about',function(req,res){res.send('about me')})*/
const io = socket(server)
io.on('connection',function(socket){
  socket.on('banana', function(data){
  io.sockets.emit('banana',data)
  })

})


console.log('App is running on port: 4000')
