const http = require('http');
const fs = require('fs'); //요청이 들어오면 먼저 fs 모듈로 html파일을 읽음.

http.createServer((req,res) => {
    fs.readFile('./server2.html',(err,data) => {
        if(err){
            throw err;
        }
        res.end(data);
    });
}).listen(8081, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});