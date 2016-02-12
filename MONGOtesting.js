var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');
var db= mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var kittySchema = mongoose.Schema({
    name: String
  });

  var Cat = mongoose.model('Cat', kittySchema);
  var Cat = mongoose.model('Cat', kittySchema);

  var kitty = new Cat({ name: 'Oreo' });
    var kitty = new Cat({ name: 'Oreo' });

  var kitty = new Cat({ name: 'Oreo' });

  var kitten = new Cat({ name: 'Fluffy' });

  kitty.save(function (err) {
    if (err) // ...
    console.log('meow');
    else{
      console.log('that works??');
    }
  });
  
  kitten.save(function (err) {
    if (err) // ...
    console.log('meow');
    else{
      console.log('second cat works??');
    }
  });
});



