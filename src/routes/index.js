const newsRouter = require('./new');
function route(app){
    app.get('/', (req, res) => {
        res.render('home');
      });
    
    app.use('/new',newsRouter);
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
}
module.exports=route;