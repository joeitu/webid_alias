var express = require('express')
var app = express()

app.set('view engine', 'ejs')

var aliases = require('./aliases.json')
const baseurl = process.env.BASEURL || 'http://localhost:8000'
const aliases_source_file = process.env.ALIASES_SOURCE_FILE || 'http://github.com/joeitu/blabla'
 
// import aliases from './aliases.json' assert {type: 'json'}

app.get('/', function (req, res) {
   res.render('index', {baseurl, aliases_source_file})
})

app.get('/aliases', function (req, res) {
   res.json(aliases)
})

app.get('/@:host.:username', function (req, res) {
  var webid = aliases[req.params.host].replace('{username}', req.params.username)
   res.send(webid)
})
 
var server = app.listen(8000)
