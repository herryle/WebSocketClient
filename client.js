const WebSocket = require('ws');
const request = require('request');
// const url = "http://47.105.220.147:8082/manholeData/addManholeData";

const ws = new WebSocket('ws://58.49.128.78:9125')


setInterval(show, 2000);


function show() {
    if (ws.readyState == 1){   //状态为1  握手成功
        ws.send("Ddata72,nn3241"); 
    } 
}

// 接受
ws.on('message', (message) => {
    console.log(message);
    // global.data = message;
    // const requestData = "message=" + data;
    // request({
    //     url: url,
    //     method: "POST",
    //     json: true,
    //     headers: {
    //         "content-type": "application/x-www-form-urlencoded",
    //     },
    //     body: requestData
    // }, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body) // 请求成功的处理逻辑
    //     }else{
    //         console.log(body)}
    // });

})
