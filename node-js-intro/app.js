const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());

// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'text/html');
//     next();
// });

// app.use((req, res, next) => {
//     const userName = req.body.username || 'unknown';
//     res.render('index', {
//         user: userName
//     });
// });

app.listen(3000);