const http = require('http');
const port = 3001;
const url =require('url')
const dhanu = require('fs')
const querystring=require('querystring')
const server = http.createServer((req,res)=>{
    const req_url = req.url;
    console.log('req-url :',req_url)

    const parsed_url = url.parse(req_url);
    console.log('parsed-url',parsed_url);

    if(parsed_url.pathname === '/'){
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.end(dhanu.readFileSync('./index.html'))
    }
    else if (parsed_url.pathname === '/json'){
        res.writeHead(200,{'Content-Type':'text/json'});
        res.end(dhanu.readFileSync('datas.json'));
    }
    
    else if(parsed_url.pathname === '/style.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        res.end(dhanu.readFileSync('./style.css'))
    }else if(parsed_url.pathname === '/submit' && req.method === 'POST'){
        console.log("reached......")

        let body='';
        
        req.on('data',(chunks)=> {
            console.log("chunks",chunks);

            body = body + chunks.toString();
            console.log(body)
        });

    }
})
server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})