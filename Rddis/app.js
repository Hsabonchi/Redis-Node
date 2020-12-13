const redis = require("redis");
const redisJson = require("redis-store-json");

// load express module using the require function
const express = require("express");

//create a new redis connection
const client = redis.createClient();

//give the redis instance to redis-json-store
redisJson.use(client);

// By convention we call this object App
const app = express();

// enable parsing json object
app.use(express.json());

// Creating an array of users
let users = [
  {
    Id: 1,
    name: "John Doe",
  },
  {
    Id: 2,
    name: "Hasan sabonchi",
  },
];


// set a new JSON key 'Users'
redisJson
  .set("Key_Users", users)
  .then(() => {
    console.log("succefuly set data");
  })
  .catch(() => {
    console.log("error when set data");
  });


    //this endpoint to list all users
    app.get("/", (req, res) => {
    // retrieve all  users
    redisJson
        .getJSON("Key_Users")
        .then((data) => {
        res.send(data);
        })
        .catch((err) => {
        console.log(err);
        });
    });

// Add a users to the Redis DB
app.post("/", (req, res) => {
    if (!req.body.name) {
        res.status(4000).send("Name is required");
    }
    // read user obj
    const user = {
        id: users.length + 1,
        name: req.body.name,
    };
    // add user object to users
    users.push(user);

  

  redisJson
    .set("Key_Users", users)
    .then(() => {
      console.log("succefuly set data");
    })
    .catch(() => {
      console.log("error when set data");
    });
  res.send(user);
});


let port = 4042;
app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`http://localhost:${port}`);
});
