const redis = require('redis');
// By default, redis.createClient() will use 127.0.0.1 and 6379 as 
// the hostname and port respectively. 
// If you have a different host/port  .e.gredis.createClient(port, host)
const client = redis.createClient(); //creates a new client

// need to listen for connect events as shown
client.on('connect', function() {
  console.log('connected');
});

// 1- store key-value pairs 
client.set('Redis', 'Redis is in-memory key–value database', function(err, reply) {
  console.log(reply);
});

// retrieve a key stored in Redis.
//The value of the key can be accessed via the callback argument reply
client.get('Redis', function(err, reply) {
  console.log(reply);
});

//2 Storing Lists
// create a list called Data types as a key,while the rest represent the elements of the list
client.rpush(['Data types', 'Lists ', 'Sets ','Hash tables','HyperLogLogs' ,'Stream'], function(err, reply) {
  console.log(reply); 
});

// get all element of the list
// -1 
client.lrange('Data types', 0, -1, function(err, reply) {
  console.log(reply); // ['angularjs', 'backbone']
});

// Checking the Existence of Keys
let key ='Data types';
client.exists('key', function(err, reply) {
  if (reply === 1) {
      console.log(key  +"    " +'  exists');
  } else {
      console.log('doesn\'t exist');
  }
});

// Deleting and Expiring Keys

// client.del('frameworks', function(err, reply) {
//   console.log(reply);
//   console.log('Successfully deleted');
// });

client.hmset("users", { firstName: "Anthony", firstName: " Mark"});

client.hgetall("users", function(err, object) {
  console.log(object);
});
