var request = require("request");
var fs = require("fs");
const json2csv = require('json2csv').parser;
const fields = ['total_events', 'items', 'node', 'org', 'msg', 'utc', 'site', 'severity', 'admin', 'id']
const opts = { fields };
var elasticsearch = require('elasticsearch');
var timestamp = new Date().toString()

console.log('node.js application starting...');

fs.open("events.json", 'w', function (err, file) {
  if (err) throw err;
  console.log('json created ');
});
fs.open("nodes.json", 'w', function (err, file) {
  if (err) throw err;
  console.log('json created ');
});

var options = { method: 'GET',
  url: 'https://<yourSCM>.riverbed.cc/api/scm.reporting/1.0/event_logs',
  headers: 
   { 'Cache-Control': 'no-cache',
     Authorization: 'Basic Yourbasicauthuse postman',
     'Content-Type': 'application/json;charset=UTF-8',
     Accept: 'application/json' } };

request(options, function (error, response, body) 
{  if (error) throw new Error(error);
   var obj;
   obj = JSON.parse(body);
   fs.writeFile("events.json", JSON.stringify(obj.items),{flag: "r+"}, err => err ? console.error(err) : console.log("Got events and appended file Ok"));;
});

var options = { method: 'GET',
  url: 'https://<yourSCM>.riverbed.cc/api/scm.reporting/1.0/nodes',
  headers: 
   { 'Cache-Control': 'no-cache',
     Authorization: 'Basic Yourbasicauthuse postman',
     'Content-Type': 'application/json;charset=UTF-8',
     Accept: 'application/json' } };

request(options, function (error, response, body) 
{  if (error) throw new Error(error);
  var objn;
  objn = JSON.parse(body);
  fs.writeFile("nodes.json", JSON.stringify(objn.items),{flag: "r+"}, err => err ? console.error(err) : console.log("Got nodes and appended file Ok"));;
});