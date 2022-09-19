// const fs = require("fs");

// const { Http2ServerRequest } = require("http2");
// console.log(fs);


// const array = [
//     {
//         anime: 'onePunchMan'
//     }]

// // fs.appendFile('main.json', JSON.stringify(array), (error)=>console.log(error)) 
// const danniy = fs.readFileSync('main.json', (error)=> {
//     console.log(error)

// })

// let buffet = Buffer.from(danniy)

// let bufferToJSON = buffet.toJSON()
// console.log(bufferToJSON);
// console.log(danniy);


// fs.writeFile('hello.html', 'print(not my problem)', (error)=>{
//    console.log(error);
// })


// fs.rename('hello.html', 'barakobama.jsx', (error)=> console.log(error))


// fs.unlink('hello.html', (error)=> console.log(error))

// const arr = [
//     {
//     name: 'Abdumomin',
//     year: 14
//     }]

// const stringer = JSON.stringify(arr)

// fs.writeFile('main.json', JSON.stringify(arr), (error)=> console.log(error))





const http = require('http')
console.log(http);

const server = http.createServer((request, response)=>{
    response.writeHead(500)

    response.end('clear')
})

server.listen(5787)