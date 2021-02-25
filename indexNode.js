const http = require('http');

const server = http.createServer((req, res) => {
    
    // const unpacked = {
    //     url: req.url,
    //     method: req.method,
    //     headers: req.headers
    // }

    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })
    // res.end(JSON.stringify(unpacked))

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Welcome to the turtles house')
    } else if (req.url === '/turtles') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Our turtles are healthy and fed organic code')
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('These are not the turtles you are looking for...')  
    }

})

server.listen(3000, () => {
    console.log('Server listening on port 3000')
})