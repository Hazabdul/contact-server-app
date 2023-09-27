// import json server 
// const server = require('json-server')
const jsonserver=require('json-server')
// create a json server application 
const server=jsonserver.create()
// setup route fors for db.json
const router=jsonserver.router('db.json')

// return a middleware used aby a json-
const middleware=jsonserver.defaults()
// setup for port for server app
const port=process.env.port|| 3000
// use middleware and router in server app 
server.use(middleware)
server.use(router)
// to listen the  app in 
server.listen(port,()=>{console.log('contact server app started at port',3000);})