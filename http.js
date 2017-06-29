/**
 * 加载http模块
 * 创建服务     ===》createServer()
 * 设置端口号   ===》listen()
 * 编写具体的处理逻辑   ==>服务回调的参数
 */

//加载http模块
var http=require("http");
//创建服务
// 服务的参数（回调)
//回调中的参数（请求对象，响应对象）
//             （requist，response）简写（req,res）
http.createServer(function(req,res){
    //写它的处理逻辑

    //响应对象   发送一个响应
    // res.end()    ==>发送响应的方法
    //获取请求对象中的url
    console.log(req.url)
    res.end("hello world !!!")

}).listen(3000);//设置端口号

/*
*  本地 localhost:3000
 */


