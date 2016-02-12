
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
});
var Schema = mongoose.Schema; 
var urls = new Schema({
    url: String,
    baseUrl: String, 
    code: String,
    title: String,
    visits: Number
});

var users = new Schema({
  username: String,
  password: String
});

exports.urls = urls;
exports.users = users;
  // urls.pre('save', function () {
  //   var shasum = crypto.createHash('sha1');
  //   shasum.update(model.get('url'));
  //   model.set('code', shasum.digest('hex').slice(0, 5));
  // });
