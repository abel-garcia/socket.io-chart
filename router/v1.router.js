

function routerV1(app){
    app.get('/', function(req, res){
        // render template index.ejs
        res.render('index')
    });
}


module.exports = routerV1;