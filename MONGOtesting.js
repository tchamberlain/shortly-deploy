var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var kittySchema = mongoose.Schema({
    name: String
  });

  var Cat = mongoose.model('Cat', kittySchema);

  var kitty = new Cat({ name: 'Oreo' });
  var kitten = new Cat({ name: 'Fluffy' });

  kittySchema.pre('save', function () {
    console.log('in presave');
    // model.set('name','testttt');
  });


  kitty.save(function (err) {
    if (err) // ...
    console.log('meow');
    else{
      console.log('that works??');
    }
  });

});



