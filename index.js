const express = require('express')
const app = express()

app.post('/charge-device', (req, res) => {
  give_energy();
  
  res.send(JSON.stringify({ result: 'CHARGED' }))
})


app.get('/status', (req, res) => {  
  res.send(JSON.stringify({ status: 'OK' }))
})

app.listen(3000, () => {
  console.log('app listening on port 3000');
})


function give_energy() {
  const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }

  fib(45)
}

