import post from './form-api/post';
import get from './form-api/get';

const routes = [];

routes.push({
  method: 'GET',
  path: '/',
  config: get,
});

routes.push({
  method: 'POST',
  path: '/form',
  config: post,
});

export default routes;
