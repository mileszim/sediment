Sediment
========

Node.JS sentiment analysis using AFINN-111 (http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010)


```npm install sediment```


## Usage

To use, just require, and call analyze:

``` javascript
var Sediment = require('sediment');

console.log(Sediment.analyze('some super cool text'));

/* Returns
{ score: 4,
  comparative: 2,
  words: 
   { matched: [ 'super', 'cool' ],
     positive: [ 'super', 'cool' ],
     negative: [],
     neutral: [] } }
*/
```

Sediment uses a singleton structure so no instantiation is required.


### Examples

To give an example, let's analyze two user reviews for the movie Riddick (2013). I've taken them from IMDB here: http://www.imdb.com/title/tt1411250/reviews

#### Positive

A positive movie review:

``` javascript
console.log(Sediment.analyze("This is a genuinely good movie, it follows on from the previous Riddick movies and doesn't leave anything to be desired. Richard B Riddick is up to his old tricks again, and if you're a fan, you won't be disappointed, definitely a must see. Vin Diesel is great as always, playing a character that never ceases to enthral me, and the rest of the cast is great too. You know a movie is good when it makes you watch the previous movies when you get home from seeing it. The music is also exceptional I found too, fitting in very well with the action scenes. I've always found Riddick to be a movie that is very rich in its universe, it pulls you in without really telling you much, and this movie does exactly the same, worth a watch even if you're not a fan."));

/* Returns:
{ score: 24,
  comparative: 2,
  words: 
   { matched: 
      [ 'good',
        'leave',
        'desired',
        'fan',
        'disappointed',
        'great',
        'enthral',
        'great',
        'good',
        'rich',
        'worth',
        'fan' ],
     positive: 
      [ 'good',
        'desired',
        'fan',
        'great',
        'enthral',
        'great',
        'good',
        'rich',
        'worth',
        'fan' ],
     negative: [ 'leave', 'disappointed' ],
     neutral: [] } }
*/
```

#### Negative

A negative movie review:

``` javascript
console.log(Sediment.analyze("Chronicles thoroughly abandoned Pitch Black, but was forgiven for executing well on Chronicle's expansive new playing field. So it's now utterly bewildering why Twohy and Diesel now abandon the inherent opportunities of that richly-appointed stage in order to serve up a predictable and boring reprise of Pitch Black when so much potential loomed out there in the darkness. And why? We've already seen this movie. Was it a lack of budget? A lack of the creative vision necessary to follow through on Chronicles? I am personally left thinking it must be the former, but still, why circle back to kill a horse you've already left for dead in the first movie? It makes no sense, feels like clumsy thematic lurching, and represents the wasting of an opportunity which doesn't come along every day. So from where I sit, we (Twohy, Diesel, and us fans) all lose out in this weak offering. I wanted so much more from this movie and instead left the theater just as parched and starving as one surely would if marooned on a deserted planet bereft of all hope."));

/* Returns:
{ score: -15,
  comparative: -0.7894736842105263,
  words: 
   { matched: 
      [ 'abandoned',
        'abandon',
        'opportunities',
        'boring',
        'loomed',
        'darkness',
        'lack',
        'lack',
        'creative',
        'vision',
        'kill',
        'dead',
        'no',
        'like',
        'wasting',
        'opportunity',
        'weak',
        'starving',
        'hope' ],
     positive: 
      [ 'opportunities',
        'creative',
        'vision',
        'like',
        'opportunity',
        'hope' ],
     negative: 
      [ 'abandoned',
        'abandon',
        'boring',
        'loomed',
        'darkness',
        'lack',
        'lack',
        'kill',
        'dead',
        'no',
        'wasting',
        'weak',
        'starving' ],
     neutral: [] } }
*/
```

As you can see, it's a pretty clear difference. Not perfect, but then again, it's just simple word matching.


### Initialize word list vs Lazy Loading
Sediment lazy-loads the word list from afinn-111.json by default, using a synchronous operation. If you want to avoid initializing the file on the first call to ```Sediment.analyze()```, you can instead force initialization by calling

```Sediment.initialize()```

This is useful if you are using a framework, for example, and want to load the list during boot.