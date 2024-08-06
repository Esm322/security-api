const express = require('express');
// const { nanoid } = require('nanoid');
const port = process.env.PORT || 3000;
const sql = require('mssql')

const app = express();

// app.post('/api/task', (req, res) => {

// });

app.listen(port, () => {
  console.log(`  Listening on http://localhost:${port}`);
});


(async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect('Server=192.168.1.109,8080;Database=test;User Id=esm;Password=t234;Encrypt=true')

    const result = await sql.query`select * from students`

    console.log(result)
  } catch (err) {
    console.log(err)
  }
})()
