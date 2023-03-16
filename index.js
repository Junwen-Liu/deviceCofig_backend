const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ct_route = require('./routes/ct_route');
const ct_route2 = require('./routes/ct_route2');
const cors = require('cors');

const connectDB = () =>{
    mongoose.connect('mongodb://localhost:27017/Device_Configs', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
}
connectDB();

app.get('/api', async (req, res) => {
    res.send('Hello World!');
});

app.use(cors());
app.use('/ct', ct_route);
app.use('/ct2', ct_route2);

app.listen(5000, () => {
    console.log('Backend app listening on port 5000!');
});