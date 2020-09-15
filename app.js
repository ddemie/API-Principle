const express = require('express');
const app = express();
const port = 4002;

const products = [
  {
    name: "Guitar",
    price: 750.00,
    quantity: 4
  },
  {
    name: "Drum Kit",
    price: 1560.95,
    quantity: 2
  },
  {
    name: "Piano",
    price: 850.00,
    quantity: 5
  },
  {
    name: "microphone",
    price:50.00,
    quantity: 10
  }
];

app.get('/', (req, res) => {res.send('Hello World!')});

// app.METHOD(PATH, HANDLER)
// GET at /products
app.get('/products', (req, res) => {res.send('GET at /products')});

// POST at /products
app.post('/products', (req, res) => res.send('POST at /products'));

// PUT at /products/{productID}
app.put('/products/:productID', (req, res) => 
    res.send (`PUT at /products/${req.params.productID}`)
);

// PATCH at /products/{productID}
app.patch('/products/:productID', (req,res) => 
    res.send (`PATCH at /products/${req.params.productID}`)
    );

// DELETE at /products/{productID}
app.delete ('/products/:productID', (req,res) => 
    res.send (`DELETE at /products/${req.params.productID}`)
    );

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)});