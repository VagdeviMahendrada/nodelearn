const http=require('http')
//example1
//const server=http.createServer((req,res)=>{
//    console.log(req)
//    res.write('welcome to our homepage')
//    res.end()
//})
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>page not found</p>
    <a href="/">back home</a>
    `)

}
)
server.listen(5000)