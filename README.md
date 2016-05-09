# Sediment #

Javascript sentiment analysis using AFINN-111 (http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010)

### Install ###
**Node.js:**

```npm install sediment```

**Browser:**

```<script type="text/javascript" src="dist/sediment.min.js"></script>```

## Usage ##
To use, just require, and call analyze:

``` javascript
let Sediment = require('sediment'); // Not required for browser

console.log(Sediment.analyze('some super cool text'));

/* Returns
{ score: 4,
  comparative: 2,
  words:
   { positive: [ 'cool', 'super' ],
     negative: [],
     neutral: [],
     matched: { cool: 1, super: 1 },
     unmatched: { text: 1, some: 1 } } }
*/
```

Sediment's methods are static, no class instantiation needed.


### Examples ###
To give an example, let's analyze two user reviews for the movie Riddick (2013). I've taken them from IMDB here: http://www.imdb.com/title/tt1411250/reviews

#### Positive ####
A positive movie review:

``` javascript
console.log(Sediment.analyze("This is a genuinely good movie, it follows on from the previous Riddick movies and doesn't leave anything to be desired. Richard B Riddick is up to his old tricks again, and if you're a fan, you won't be disappointed, definitely a must see. Vin Diesel is great as always, playing a character that never ceases to enthral me, and the rest of the cast is great too. You know a movie is good when it makes you watch the previous movies when you get home from seeing it. The music is also exceptional I found too, fitting in very well with the action scenes. I've always found Riddick to be a movie that is very rich in its universe, it pulls you in without really telling you much, and this movie does exactly the same, worth a watch even if you're not a fan."));

/* Returns:
{ score: 24,
  comparative: 2.6666666666666665,
  words:
   { positive: [ 'fan', 'worth', 'rich', 'good', 'great', 'enthral', 'desired' ],
     negative: [ 'disappointed', 'leave' ],
     neutral: [],
     matched:
      { fan: 2,
        worth: 1,
        rich: 1,
        good: 2,
        great: 2,
        enthral: 1,
        disappointed: 1,
        desired: 1,
        leave: 1 },
     unmatched:
      { a: 8,
        not: 1,
        youre: 2,
        if: 2,
        even: 1,
        watch: 2,
        same: 1,
        the: 7,
        exactly: 1,
        does: 1,
        movie: 4,
        this: 2,
        and: 4,
        much: 1,
        you: 6,
        telling: 1,
        really: 1,
        without: 1,
        in: 3,
        pulls: 1,
        it: 4,
        universe: 1,
        its: 1,
        very: 2,
        is: 7,
        that: 2,
        be: 3,
        to: 4,
        riddick: 3,
        found: 2,
        always: 2,
        ive: 1,
        scenes: 1,
        action: 1,
        with: 1,
        well: 1,
        fitting: 1,
        too: 2,
        i: 1,
        exceptional: 1,
        also: 1,
        music: 1,
        seeing: 1,
        from: 2,
        home: 1,
        get: 1,
        when: 2,
        movies: 2,
        previous: 2,
        makes: 1,
        know: 1,
        cast: 1,
        of: 1,
        rest: 1,
        me: 1,
        ceases: 1,
        never: 1,
        character: 1,
        playing: 1,
        as: 1,
        diesel: 1,
        vin: 1,
        see: 1,
        must: 1,
        definitely: 1,
        wont: 1,
        again: 1,
        tricks: 1,
        old: 1,
        his: 1,
        up: 1,
        b: 1,
        richard: 1,
        anything: 1,
        doesnt: 1,
        on: 1,
        follows: 1,
        genuinely: 1 } } }
*/
```

#### Negative ####

A negative movie review:

``` javascript
console.log(Sediment.analyze("Chronicles thoroughly abandoned Pitch Black, but was forgiven for executing well on Chronicle's expansive new playing field. So it's now utterly bewildering why Twohy and Diesel now abandon the inherent opportunities of that richly-appointed stage in order to serve up a predictable and boring reprise of Pitch Black when so much potential loomed out there in the darkness. And why? We've already seen this movie. Was it a lack of budget? A lack of the creative vision necessary to follow through on Chronicles? I am personally left thinking it must be the former, but still, why circle back to kill a horse you've already left for dead in the first movie? It makes no sense, feels like clumsy thematic lurching, and represents the wasting of an opportunity which doesn't come along every day. So from where I sit, we (Twohy, Diesel, and us fans) all lose out in this weak offering. I wanted so much more from this movie and instead left the theater just as parched and starving as one surely would if marooned on a deserted planet bereft of all hope."));

/* Returns:
{ score: -15,
  comparative: -0.8333333333333334,
  words:
   { positive:
      [ 'hope',
        'opportunity',
        'like',
        'vision',
        'creative',
        'opportunities' ],
     negative:
      [ 'starving',
        'weak',
        'wasting',
        'no',
        'dead',
        'kill',
        'lack',
        'darkness',
        'loomed',
        'boring',
        'abandon',
        'abandoned' ],
     neutral: [],
     matched:
      { hope: 1,
        starving: 1,
        weak: 1,
        opportunity: 1,
        wasting: 1,
        like: 1,
        no: 1,
        dead: 1,
        kill: 1,
        vision: 1,
        creative: 1,
        lack: 2,
        darkness: 1,
        loomed: 1,
        boring: 1,
        opportunities: 1,
        abandon: 1,
        abandoned: 1 },
     unmatched:
      { all: 2,
        of: 6,
        bereft: 1,
        planet: 1,
        deserted: 1,
        a: 5,
        on: 3,
        marooned: 1,
        if: 1,
        would: 1,
        surely: 1,
        one: 1,
        as: 2,
        and: 7,
        parched: 1,
        just: 1,
        theater: 1,
        the: 7,
        left: 3,
        instead: 1,
        movie: 3,
        this: 3,
        from: 2,
        more: 1,
        much: 2,
        so: 4,
        wanted: 1,
        i: 3,
        offering: 1,
        in: 4,
        out: 2,
        lose: 1,
        fans: 1,
        us: 1,
        diesel: 2,
        twohy: 2,
        we: 1,
        sit: 1,
        where: 1,
        day: 1,
        every: 1,
        along: 1,
        come: 1,
        doesnt: 1,
        which: 1,
        an: 1,
        represents: 1,
        lurching: 1,
        thematic: 1,
        clumsy: 1,
        feels: 1,
        sense: 1,
        makes: 1,
        it: 3,
        first: 1,
        for: 2,
        already: 2,
        youve: 1,
        horse: 1,
        to: 3,
        back: 1,
        circle: 1,
        why: 3,
        still: 1,
        but: 2,
        former: 1,
        be: 1,
        must: 1,
        thinking: 1,
        personally: 1,
        am: 1,
        chronicles: 3,
        through: 1,
        follow: 1,
        necessary: 1,
        budget: 1,
        was: 2,
        seen: 1,
        weve: 1,
        there: 1,
        potential: 1,
        when: 1,
        black: 2,
        pitch: 2,
        reprise: 1,
        predictable: 1,
        up: 1,
        serve: 1,
        order: 1,
        stage: 1,
        'richly-appointed': 1,
        that: 1,
        inherent: 1,
        now: 2,
        bewildering: 1,
        utterly: 1,
        its: 1,
        field: 1,
        playing: 1,
        new: 1,
        expansive: 1,
        well: 1,
        executing: 1,
        forgiven: 1,
        thoroughly: 1 } } }
*/
```

As you can see, it's a pretty clear difference. Not perfect, but then again, it's just simple word matching.
