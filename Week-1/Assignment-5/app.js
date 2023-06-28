const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/data', (req, res) => {
  if ('number' in req.query){

    if (n = parseInt(req.query['number'])){
      res.send((1 + n) * n / 2);
    }else{
      res.send('Wrong Parameter');
    }
    
  }else{
    res.send('Lack of Parameter');
  }
})

app.listen(port, () => {
  console.log(`Hello World: http://127.0.0.1:${port}`);
  console.log(`Lack of Parameter: http://127.0.0.1:${port}/data`);
  console.log(`Wrong Parameter: http://127.0.0.1:${port}/data?number=xyz`);
  console.log(`Correct Parameter: http://127.0.0.1:${port}/data?number=5`);
})
