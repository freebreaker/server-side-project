import http from 'http'
import fs from 'fs'

// var data = fs.readFileSync('text.txt')  //同步写法

// console.log(data.toString())

// fs.readFile('text.txt',(err,data)=>{       //异步写法
//     console.log(data.toString())
// })

// console.log('first show')

// http.createServer((Request,Response)=>{
//     Response.writeHead(200,{'content-type':'text/plain;charset=utf-8'})
//     var url = Request.url
//     Response.end("您正在访问"+url)
// }).listen(8080)