import Redis from 'ioredis';

const redis = new Redis();

redis.set('name', 'Hoang');
redis.get('name', (err, result) => {
	console.log(result);
});