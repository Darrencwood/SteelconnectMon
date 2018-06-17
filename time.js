var fs = require("fs");
var moment = require("moment");
fs.readFile("eventsparse1.json", {encoding: 'utf-8'}, function(err, data,) {
    if (err) { throw err; }
  
      // Build up a giant bulk request for elasticsearch.
      console.log('Reading json');
      var obj1;
      obj1 = JSON.parse(data);
      obj1.forEach((item) => 
       //{console.log(JSON.stringify((item.utc=(moment.unix((item.utc)).format("Y-MM-DD HH:mm:ss")))))});;
       {fs.appendFileSync("e2.json", JSON.stringify(item, item.utc=(moment.unix((item.utc)).format("Y-MM-DD HH:mm:ss"))))},{flag: "\n"}, 
       err => err ? console.error(err) : console.log("Got events items and appended file Ok"))});;
