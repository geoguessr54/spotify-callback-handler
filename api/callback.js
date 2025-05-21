export default function handler(req, res) {
  const { code } = req.query;
  if (code) {
    res.status(200).send(`
      <html>
        <body style="font-family:sans-serif;">
          <h2>✅ 인증 코드 받음</h2>
          <p><b>code:</b> ${code}</p>
          <p>이 코드를 Python 코드에 붙여넣으세요.</p>
        </body>
      </html>
    `);
  } else {
    res.status(400).send("❌ code가 전달되지 않았습니다.");
  }
}
