var express = require('express');
var app, server;
var fs = require('fs');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
var console = require('./consoleColors');
var url = require('url');
var opn = require('opn');
var _ = require('lodash');
var portfinder = require('portfinder');
var mysql      = require('mysql');
var dbPool;
var nodeCleanup = require('node-cleanup');

var dbConfig = {
    host     : 'sql9.freesqldatabase.com',
    user     : 'sql9193293',
    password : 'tC56Q83xLU',
    database : 'sql9193293'
};

var fileUpload = require('express-fileupload');

portfinder.basePort = 8100;//1000-65535
//multiple servers 
portfinder.getPort(function (err, port) {
      if (err) {
          console.redBold('Port Not Avaialable because of ' + err);
          return;
      }
      setup(port);
      return;
});


function setup(port){
    app = express();
    server = app.listen(port,function(){
      console.cyanBold('Log Parser Listening on ' + port);
      onServerBind();
      opn('http://localhost:'+port);
    });

    server.on('error',function(err){
      console.redBold(' Error while trying to setup LogParser  ');
      var code = err && err.code? err.code : err;
      console.log(code);
    });

}

function onServerBind(){
  'use strict';
  app.use(cors);
  app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
  app.use(express.static(__dirname + '/../client'));
  app.use(express.static(__dirname + '/assets'));

  app.use(compression());
  app.use(bodyParser());
  app.get('/customers',getCustomers);
  app.post('/customer',saveCustomer);
  app.get('/actors',getActors);
  app.post('/actor',saveActor);
  app.get('/messages', getMessages);
  app.get('/tasks', getTasks);
  app.post('/message',addMessage);
  app.post('/task',addTask);
}

function connectDB(){

  //dbConnection = mysql.createConnection();
  dbPool = mysql.createPool(dbConfig);
}

connectDB();

nodeCleanup(function (exitCode, signal) {
  if(dbPool){
    console.cyanBold('Closing DB Connection!');
    

    dbPool.end(function (err) {
       console.magenta('🍩 db is closed eat donut now!!');
    });

     
  }
  console.redBold('👯 You are making me read crazy Madhu!!');

});

function getCustomers(req,res){

    console.magenta('🔔 At your service, connecting to database, fetching customers!! ');
    if(!isEmptyObject(req.query)){
      console.log('Query String is ');
      console.dir(req.query);
    }
    dbPool.getConnection(function(err, connection) {
        if(err){
          console.log('error occurred while connecting to db!!' );
          console.error(err);
          return;
        }

        connection.query('SELECT * from Customers', function (error, results, fields) {
            connection.release();
            if(error){
                console.log('error occurred while fetching from db customers!!');
                return;
            }
            
            console.greenBold('🎈 Sending Customers to UI from Ajax');
            res.json(results);
            res.end();

        });
    });

    
}




function saveCustomer(req,res){
  console.magenta('🔔 At your service, saving the customer data to database!! ');
    var data =  req.body;

    var errorMessage = '';
    
    if(!data.name){
      console.red('Missing Name!!');
      errorMessage += 'Missing Name!!';
    }

    if(!data.city){
      console.red('Missing City!!');
      errorMessage += (errorMessage !== '' ? ' , ' : '')+'Missing City!!';
    }


    if(!data.age){
      console.red('Missing Age!!');
      errorMessage += (errorMessage !== '' ? ' , ' : '') +'Missing Age!!';
    }


    if(!data.name || !data.city || !data.age){
      console.red('Not able to save, so Returning!!');
      res.status(422).send(errorMessage + ' Please correct and send again!');
      return;
    }

    var customer = {
      name : data.name,
      age  : data.age,
      city : data.city
    };


    dbPool.getConnection(function(err, connection) {
        if(err){
          console.log('error occurred while connecting to db!!' );
          console.error(err);
          res.status(500).send('Not able to connect to db!!');
          return;
        }

        connection.query('INSERT INTO Customers SET ?', customer, function (error, results, fields) {
            connection.release();
            if(error){
                console.log('error occurred while fetching from db customers!!');
                return;
            }
            
            console.greenBold('🏄  Saved a new Customer with id of '+ results.insertId);
            res.json(results.insertId);
            res.end();

        });
    });
}



function getActors(req,res){
    console.blue('🔔 At your service, connecting to database, fetching actors!! ');
      
      dbPool.getConnection(function(err, connection) {
        if(err){
          console.log('error occurred while connecting to db!!' );
          console.error(err);
          return;
        }

        connection.query('SELECT * from actors', function (error, results, fields) {
            connection.release();
             if(error){
                console.log('error occurred while fetching from db actors!!');
                return;
              }
             
            console.greenBold('🎈 Sending Actors to UI from Ajax');
            res.json(results);
            res.end();

        });
    });


    
}

function saveActor(req,res){

    console.magenta('🔔 At your service, saving the actor data to database!! ');
    var data =  req.body;

    var errorMessage = '';
    
    if(!data.firstname){
      console.red('Missing first name!!');
      errorMessage += 'Missing first name!!';
    }

    if(!data.lastname){
      console.red('Missing last name!!');
      errorMessage += (errorMessage !== '' ? ' , ' : '')+'Missing last name!!';
    }


    if(!data.age){
      console.red('Missing Age!!');
      errorMessage += (errorMessage !== '' ? ' , ' : '') +'Missing Age!!';
    }

    if(!data.dateofbirth){
      console.red('Missing Date of birth!!');
      errorMessage += (errorMessage !== '' ? ' , ' : '') +'Missing Date of birth!!';
    }

    if(!data.imagename){
      console.red('Missing Image Name!!');
      errorMessage += (errorMessage !== '' ? ' , ' : '') +'Missing Image Name!!';
    }

    

    if(!data.firstname || !data.lastname || !data.age || 
         !data.dateofbirth || !data.imagename){
      console.red('Not able to save, so Returning!!');
      res.status(422).send(errorMessage + ' Please correct and send again!');
      return;
    }

    var actor = {
      firstname : data.firstname,
      lastname : data.lastname,
      age  : data.age,
      dateofbirth  : data.dateofbirth,
      imagename : data.imagename
    };


    dbPool.getConnection(function(err, connection) {
        if(err){
          console.log('error occurred while connecting to db!!' );
          console.error(err);
          res.status(500).send('Not able to connect to db!!');
          return;
        }

        connection.query('INSERT INTO actors SET ?', actor, function (error, results, fields) {
            connection.release();
            if(error){
                console.log('error occurred while fetching from db actors!!');
                return;
            }
            
            console.greenBold('🏄  Saved a new Actor with id of '+ results.insertId);
            res.json(results.insertId);
            res.end();

        });
    });

    
}

function addTask(req,res) {
  'use strict';

  var task = req.body;
  if(task){
    var pa = path.normalize(__dirname+'/data/tasks.json');
    var all =  readJsonFileSync(pa);
    var tasks = all.tasks;
    tasks.push(task);
    var data = {
      tasks: tasks
    };
    data = JSON.stringify(data,null,2);
    writeJsonFileSync(pa,data);
    res.json({sucess:'Task saved successfully'});
    res.end();

  }else{
    res.json({message:'sorry data sent is not good!!'});
    res.end();
  }
}

function addMessage(req,res){
  'use strict';

  var message = req.body;
  if(message){
    var pa = path.normalize(__dirname+'/data/messages.json');
    var all =  readJsonFileSync(pa);
    var messages = all.messages;
    messages.push(message);
    var data = {
      messages: messages
    };
    data = JSON.stringify(data,null,2);
    writeJsonFileSync(pa,data);
    res.json({sucess:'Message saved successfully'});
    res.end();

  }else{
    res.json({message:'sorry data sent is not good!!'});
    res.end();
  }

}

function isEmptyObject(obj) {
  for(var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
}


function getMessages(req,res){
  var pa = path.normalize(__dirname+'/data/messages.json');
var all =  readJsonFileSync(pa);
var messages = all.messages;
res.json(messages);
console.log('served memssages')
}


function getTasks(req,res){
  var pa = path.normalize(__dirname+'/data/tasks.json');
var json =  readJsonFileSync(pa);

res.json(json);
console.log('served memssages')
}

function writeJsonFileSync(filepath,data){
    fs.writeFileSync(filepath, data);
}



function readJsonFileSync(filepath, encoding){
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function cors(req, res, next) {
  'use strict';
   if (req.method === 'OPTIONS') {
        console.log('!OPTIONS');
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Credentials',false);
        res.header('Access-Control-Max-Age',86400);
        res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.json({});
        res.end();
  }else{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }
}
