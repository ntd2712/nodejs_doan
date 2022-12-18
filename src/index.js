const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');
const nodemon = require('nodemon');

app.use(morgan('combined'));

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
  extended:true
}));
route(app);
app.use(express.json());
app.set('view engine', 'hbs');
app.set('view',path.join(__dirname,'resources\\view'));


app.listen(port, () => 
  console.log(`Example app listening at http://localhost:${port}`)
);