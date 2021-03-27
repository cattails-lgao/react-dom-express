// 开启mongoDB服务
const mongoose = require('mongoose');
// 连接mongoDB
mongoose.connect('mongodb://localhost/server_db2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})




module.exports = (callback) => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
      // we're connected!
      if(typeof callback === 'function') callback.call(null, 'open');
  });
};