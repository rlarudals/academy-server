import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // 폼태그를 허용 허겟다는뜻!! 파일은 폼태그박에안됨 ㅜ3ㅜ
app.use(cors());

app.get("/api/testREST", (req, res) => {
  console.log(
    "노뉴ㅗ누ㅏ너ㅑㅗㅕ뉴ㅓㅜㅗㅑㅕ효ㅠㅗㅕㅑㅛㄹ솧퍼ㅠㅏㅕㅛㅅㄹㅇㅊ호퍼혀ㅑㅛㅅㅇㄱㅎㄹ초퍼ㅕㅑㅛㅅㄹㅎ초퍼ㅠㅏㅕㅛㅅㄹㅇㅊ호퍼ㅠㅏㅕㅑㅛㅅㄹㅇㅊ호ㅓㅠ혀ㅛㄹㅅㅇㅊ호퍼ㅠㅏㅕㅑㅛㅅㄹㅇㄱ"
  );

  return "TEST";
});

app.post("/api/dataTest", (req, res) => {
  console.log(req.body.params);
});

app.post("/api/fileUpload", (req, res) => {
  console.log(req.body.form);
  // 버튼누르면실행!!
});

app.listen(PORT, () => {
  console.log(`${PORT} Sever Start`);
});
