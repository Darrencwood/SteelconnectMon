# SteelconnectMon
Sample node.js code to extract useful monitoring data from Riverbed Steelconnect Manager API

https://support.riverbed.com/apis/ 

Poller.js will collect all events from SCM atm it's just events and nodes.

Load.js will create an index and uses elasticsearch.js client to push to the new index in ES and allow ES to register the docs.


All comments / help appreciated, I'm only jus learning node.js so have no idea about proper coding practice orhow to handl json correctly etc, If thi is useful and youy can make a beter / claner job please have at it.

You'll need Node installed with (propably moment.js as well)

npm elasicsearch and jsontocsv if you wish to export the data to csv instead of json

Update > Basic Yourbasicauthuse postman to your basic auth details 

Update > url: 'https://<yourSCM>.riverbed.cc/api/scm.reporting/1.0/event_logs' to your specific SCM endpoint
  



WIP and ToDo

Fix unix / epoch time wih moment parse for the UTC field in the array so ES / Sumo etc can recognise the utc fild as the date correctly.

run it as a lambda function / serverless and output to a queue

work out how to call and parse only new events

Feed to sumo / cloudwatch / Azure Log analytics
