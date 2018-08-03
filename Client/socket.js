const socket = io.connect('http://localhost:4000')
//Variable named socket is equal to connecting socket to the server

const message = document.getElementById('Message')
//variable named message is equal html message id value

const buttonSend= document.getElementById('send')
//variable named buttonSend is equal to html id of send

const messages=document.getElementById('messageContent')

buttonSend.addEventListener('click',function(){
   socket.emit('banana',{
  content:message.value,
  timestamp:new Date()
  })
  console.log(message.value)
})
socket.on('banana',function(data){
  messages.innerHTML += '<div>' + data.content + '<span>'+ data.timestamp+ '</span></div>'
})

//when the user clicks a message will be sent via socket to the server
