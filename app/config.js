
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
var db= mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var urls = mongoose.Schema({
      'url': String,
      'baseUrl': String, 
      'code': String,
      'title': String,
      'visits': Number
  });

  var users = mongoose.Schema({
    'username': String,
    'password': String
  });
});




// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });



module.exports = db;
