var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//load employees route
var employees = require('./routes/employees');
var app = express();

var connection  = require('express-myconnection');
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.use(
    connection(mysql, {
        host: 'database-host',
        user: 'database-user',
        password: 'database-password',
        port: 3306,
        database: 'database-name'
    }, 'pool')
);

app.get('/', routes.index);
app.get('/employees', employees.list);
app.get('/employees/add', employees.add);
app.post('/employees/save', employees.save);
app.get('/employees/delete/:id', employees.remove);
app.get('/employees/edit/:id', employees.edit);
app.post('/employees/update/:id',employees.update);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Node Server Listening on Port ' + app.get('port') + '.');
});