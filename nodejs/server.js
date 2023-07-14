
const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('hi this is nodejs personal server')
})


server.listen(2000,'localhost',()=>{
    console.log('server is running')
})