const express = require("express"); //express 프레임웤 불러옴
const path = require("path"); //주소 관련 프레임웤 불러옴
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "static"))); //express에 static 폴더 내용 올림. 이걸통해 index.html이 참고를~
app.get("/user", callbtGet);

function callbtGet(req, res) {
  res.sendFile(path.join(__dirname, "index.html")); //매개변수로 있는 두개를 합쳐서~ 하나의 경로로 만들고, 그 경로를 반환해줌으로써 해당경로 파일을 응답요청한다.
  const url = req.headers.host;
  console.log(url); //현재사용자가요청한 url 주소.
}

require("http")
  .createServer(app)
  .listen(port, () => {
    console.log("Server started on port, " + port);
  });
