const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const payment = require('./routes/payment.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello world");
// })

app.use('/payment', payment);


app.listen(PORT, () => console.log('Server listening on Port: ', PORT))