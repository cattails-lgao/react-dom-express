const express = require('express')
const app = express()
const port = 5001;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

// 路由
const allRouter = require('./router');

app.use('/api', allRouter);

// 开启mongoDB服务
const mongoose = require('mongoose');
// 连接mongoDB
mongoose.connect('mongodb://localhost/server_db2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

// 开启mongoDB监听
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});
