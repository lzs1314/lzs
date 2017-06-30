/**
 * 按请求的地址去响应不同的数据
 *  /helloaa    ==>helloaa
 *  /hellobb     ==>hellobb
 */

/*
* 加载http模块
* 创建一个服务
* 设置端口号
* 编写具体的逻辑
* */
//加载http
var http=require("http");
//创建服务
//服务中的参数  回调
//回调中的参数  （请求对象，响应对象）
http.createServer(function(req,res){
    if (req.url=="/helloaa"){
        res.end("helloaa")
    }else if(req.url=="/hellobb"){
        res.end("hellobb")
    }
}).listen(3002);//设置端口号