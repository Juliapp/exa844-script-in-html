const Twitter = require('twitter');
require('dotenv').config()

const T = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

T.stream('statuses/filter', {track: 'rupaul'}, function(stream) {
  stream.on('data', function(event) {
    //console.log(event.text);
    //console.log('o evento foi: ')
    //console.log(event)
  });

  stream.on('error', function(error) {
    throw error;
  });
});


