import express from 'express';
import { createClient } from 'redis';

const app = express();

/**
 * Redis 與 Nodejs 的配置可以參考:
 * (1) 官方手冊: https://redis.io/docs/clients/
 * (2) Github Repo: https://github.com/redis/node-redis
 * (3) createClient 手冊: https://github.com/redis/node-redis/blob/HEAD/docs/client-configuration.md
 *
 * 容器中的相互通信
 * 發出的Request的url，會先被docker審視，如果送出的是一個容器名，
 * 則不會在向外界送出，而被視為容器中的相互通信。
 */
const client = createClient({
  url: 'redis://redis-server:6379',
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.connect();

app.get('/', async (req, res) => {
  // 讀取 visits；若尚未存在visits，則初始值為 0
  const visits = (await client.get('visits')) ?? '0';
  res.send(`Number of visits is ${visits}.`);
  // 更新 visits + 1
  client.set('visits', parseInt(visits) + 1);
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
