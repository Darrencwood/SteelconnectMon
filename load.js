// credit goes to this stack overflow post - http://stackoverflow.com/questions/20646836/is-there-any-way-to-import-a-json-filecontains-100-documents-in-elasticsearch
var elasticsearch = require('elasticsearch'),
    fs = require('fs'),
    events = JSON.parse(fs.readFileSync("events.json")); // name of my first file to parse
    //nodes = JSON.parse(fs.readFileSync("nodes.json")); // and the second set
var client = new elasticsearch.Client({
  hosts: 'http://user:password@elasticsearchhost:9200',
  log: 'trace'
});


for (var i = 0; i < events.length; i++ ) {
  client.create({
    index: "sdn9", // name your index
    type: "event", // describe the data thats getting created
    id: i, // increment ID every iteration - I already sorted mine but not a requirement
    body: events[i] // *** THIS ASSUMES YOUR DATA FILE IS FORMATTED LIKE SO: [{prop: val, prop2: val2}, {prop:...}, {prop:...}] 
  }, function(error, response) {
    if (error) {
      console.error(error);
      return;
    }
    else {
    console.log(response);  //  I don't recommend this but I like having my console flooded with stuff.  It looks cool.  Like I'm compiling a kernel really fast.
    }
  });
}
