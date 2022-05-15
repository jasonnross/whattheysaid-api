import express from 'express';

export function generateRouter(routeArray) {
  const router = new express.Router();

  if (!routeArray || !routeArray.forEach) {
    console.log('you indicated', routeArray, 'is a subrouter, did you mean to use executor instead?');
    throw new Error('No Route Array You Dummy');
  }
  routeArray.forEach(route => {
    if (route.executor) {
      const methods = route.methods instanceof Array ? route.methods : [route.methods || 'all'];
      methods.forEach(method => {
        const params = [route.path].concat(route.executor); // This is important because route.executor can be an array of functions or a single function
        router[method](...params);
      });
    } else if (route.subrouter) {
      router.use(route.path, generateRouter(route.subrouter));
    }
  });

  return router;
}
