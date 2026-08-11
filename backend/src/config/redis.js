
const {createClient}=require('redis')
require('dotenv').config();

const redisClient=createClient({
    username: 'default',
    password:process.env.REDIS_PASS,
    socket: {
        host: 'sakura-crayon-ball-23727.db.redis.io',
        port: 12581
    }
})
module.exports=redisClient