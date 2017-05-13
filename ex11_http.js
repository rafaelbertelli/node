const http = require('http')

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-type" : "text/html"})
    res.end('<h1>Acho melhor usarmos o ExpresJS!</h1>')
})

const porta = 1978

server.listen(porta, function() {
    console.log(`Escutando a porta ${porta}`)
})