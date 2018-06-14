# SteelconnectMon
Sample code to extract useful monitoring data from Riverbed Steelconnect Manager

All comments / help appreciated

You'll need Node installed with 

npm elasicsearch and jsontocsv if you wish to export the data to csv.

Update > Basic Yourbasicauthuse postman to your basic auth details 

Update > url: 'https://<yourSCM>.riverbed.cc/api/scm.reporting/1.0/event_logs' to your specific SCM endpoint
  
WIP and ToDo

run it as a lambda function / serverless and output to a queue

work out how to call and parse only new events

Feed to sumo / cloudwatch / Azure Log analytics
