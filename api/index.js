const apiRouter = require('express').Router();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

apiRouter.get('/health', (req, res, next) => {
  res.send({
    healthy: true,
  });
});
apiRouter.post('/hello', (req, res, next) => {
  res.send({
    message: "hello world"
  })
})

// place your routers here

module.exports = apiRouter;
