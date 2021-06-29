//Uptime

const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", (req, res) => {
  res.sendStatus(200)
});

app.listen(process.env.PORT);

console.log("[1/3]Downloading Data...");
console.log("[2/3]Update Data...");
console.log("[3/3]Loading Data ...");

//Bot
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./server.js', { token: process.env.token });

manager.on('shardCreate', shard => console.log(`Success | Launched shard ${shard.id}`));
manager.spawn();
