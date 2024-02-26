const express = require('express');
const app = express();
const path = require('path');

app.listen(3000)
app.set('view engine', 'ejs');
app.set('views', path.join('views'));
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('index'); // render index.ejs
})

// app.get('/', (req, res) => {
//     const imageList = [
//         './green.png',
//         './red.png',
//         './blue.png',
//         // Add more image URLs as needed
//     ];

//     res.render('index', { imageList });
// });