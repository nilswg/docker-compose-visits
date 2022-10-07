"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
const client = (0, redis_1.createClient)({
    url: 'redis://redis-server:6379',
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();
app.get('/', async (req, res) => {
    const visits = (await client.get('visits')) ?? '0';
    res.send(`Number of visits is ${visits}.`);
    client.set('visits', parseInt(visits) + 1);
});
app.listen(8081, () => {
    console.log('Listening on port 8081');
});
