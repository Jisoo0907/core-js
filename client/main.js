import { tiger } from './lib/index.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

/* ---------------------------------- 함수 사용 --------------------------------- */
const response = await tiger.get(ENDPOINT);

console.log(response.data);
