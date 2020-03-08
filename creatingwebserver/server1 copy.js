const http = require('http');

http.createServer((req,res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, ()=> {
    console.log('8080번 포트에서 서버 대기 중입니다.');
}); //리눅스에서는 1024번 이하의 포트 연결에는 관리자 권한이 필요하다!