
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoose = require('mongoose');


var app = module.exports = express.createServer();

mongoose.connect('localhost','myBook');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //****实现layout的block功能****
  app.set('view options', {
    layout: false
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/detail/:id',routes.detail);
app.get('/addbook',routes.addList);
app.get('/adminBooks',routes.adminBooks);

//添加或修改书籍信息
app.post('/postbook',routes.addPost);

//更新书籍
app.get('/addbook/:id',routes.update);


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
