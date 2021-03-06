# Redis-Node 
 Redis with node App
<h4>Redis (Remote Dictionary Server)is a fast and efficient in-memory key-value store. It is also known as a data structure server, as the keys can contain strings, lists, sets, hashes and other data structures. If you are using Node.js, you can use the node_redis module to interact with Redis. This tutorial explains various ways of interacting with Redis from a Node.js app using the node_redis library. </h4>

- Redis is often the most popular key-value database.
- Redis typically holds the whole dataset in memory
- Redis has also been ranked the #4 NoSQL database in user satisfaction 
- Redis provides a data model that is very unusual compared to a relational database management system (RDBMS).
- data must be stored in a way which is suitable later for fast retrieval, without help from the database system in form of secondary indexes, aggregations or other common features of traditional RDBMS.
- Redis stores data in a key-value format.
- Redis no tables,no query language and no schema.

` Note that Redis doesn’t support nested objects. All the property values in the object will be coerced into strings before getting stored `.

#### Installation

1. [Install Redis](https://redis.io/download) do not forget to run `make` command.
2. Change directory to redis  e.g `cd redis-6.0.9/`.
3. Run Redis with: `src/redis-server`.
4. Install node_redis, as you may have guessed, is the Redis client for Node.js. You can install it via npm using the following command. `npm install redis`

### redis.createClient()
If you have redis-server running on the same machine as node, then the defaults for port and host are probably fine and you don't need to supply any arguments. createClient() returns a RedisClient object.

- Make sure to have your redis-server up and running.

<img src="Redis-Node/Img/server.png">

### Redis-store-json Nodejs Module
- In order to store and get json into Redis DB We need to install `Redis-store-json` .
- Redis-store-json which is a light nodejs module that will allow us to easily store, get and modify JSON objects into redis database. It is based on promise, so every function works with promiseYou will also need the redis_nodejs package module.



- Ref
1- [Slides](http://nosqlberlin.de/slides/NoSQLBerlin-Redis.pdf)
