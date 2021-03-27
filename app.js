const express = require('express')
const app = express()
const { userRouter, categoryRouter, productRouter,roleRouter } = require('./router');
const { MongoDb } = require('./DB')
const port = 5001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 路由
app.use('/api', userRouter);
app.use('/api', categoryRouter);
app.use('/api', productRouter);
app.use('/api', roleRouter);

// 开启mongoDB监听
MongoDb(() => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
