class NewControllers{
    index(req,res){
        res.render('new');
    }
    show(req,res){
        res.send('new detail!!')
    }
}
module.exports=new NewControllers;