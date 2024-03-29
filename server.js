


// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>Hello team!</h1>')

// http.createServer(function(req, res) {
//   let path = req.url;
//     switch(path) {
//       case '/':
//       res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//       // res.end('<h1>Hello team!</h1>')
//       fs.createReadStream(__dirname + '/index.html').pipe(res)
//       break;
//       case '/about':
//       res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//       //res.end('<h1>Команда которая создала приложение для вызова такси</h1>')
//       fs.createReadStream(__dirname + '/about.html').pipe(res)
//       break;
//       default:
//       res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
//       //res.end('<h1>Такой страницы не существует</h1>')
//       fs.createReadStream(__dirname + '/404.html').pipe(res)
//     }





//}).listen(3333);





























const http = require('http');
//const port = 3333;
const express = require('express');
const { PORT = 3333 } = process.env;

const app = express();

app.set("view engine", "ejs")

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/about', function(req, res) {
  res.sendFile(__dirname + '/about.html')

    res.render("about", {
      title: "Команда которая создала приложение для вызова такси",
      teamLeads: ["Anna", "Leonid", "Ruslan", "Artem"],
      emails: "team@ninja.com",
      phone: "+380123456"
    })
})

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/404.html')
})





const requestHandler = (request, response) => {}

const server = http.createServer(app)

server.listen(PORT, (err) => {
  if(err) {
    return console.log('error', err)
  }
  console.log('Server work')
})
