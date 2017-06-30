/**
 * Created by Administrator on 2017/6/29.
 */
var http = require("http")
var fs = require("fs")
http.createServer(function(req,res){
    var url=req.url;
    switch(url){
        case"/":
            fs.readFile("/index.html","utf-8",function(err,data){
                if(err){
                    console.log("失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"centent-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break
        case"/index.css":


            fs.readFile("/index.css","utf-8",function(err,data){
                if(err){
                    console.log("失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"centent-type":"text/css;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case"/index.js":


            fs.readFile("/index.js","utf-8",function(err,data){
                if(err){
                    console.log("失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"centent-type":"text/js;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case"/1.jpg":
            fs.readFile("/1.jpg",function(err,data){
                if(err){
                    console.log("失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"centent-type":"image/jpeg;charset=utf8"})
                    res.end(data)
                }
            })
            break;
        case"/index1.html":
            fs.readFile("/index1.html","utf-8",function(err,data){
                if(err){
                    console.log("失败")
                    console.log(err)
                }else{
                    res.writeHead(200,{"centent-type":"text/html;charset=utf8"})
                    res.end(data)
                }
            })
            break;

    }
}).listen(3000)