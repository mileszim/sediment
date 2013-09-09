var fs   = require('fs');
var path = require('path');

/**
 * Sediment
 */
var Sediment = {
  
  /**
   * Configuration
   */
  _config: {
    split_char: ' ',
    word_json: 'afinn-111.json'
  },
  
  /**
   * Reads the word JSON and parses it into a useable object
   */
  _loadWords: function() {
    this.words = JSON.parse(fs.readFileSync(path.resolve(__dirname, this._config.word_json),'utf8'));
  },
  
  
  
  /**
   * Strips text of anything but letters, and converts to lower case, and breaks it into array
   *
   * @param  {string} text Text to process/normalize
   * @return {string} Processed text
   */
  _clean: function(text) {
    return text.replace(/[^a-zA-Z\s]/gi, '').toLowerCase().split(this._config.split_char);
  },
  
  
  
  /**
   * Analyze text and return a sentiment object
   *
   * @param  {string} text The text to parse
   * @return {object} Analysis of the text
   */
  analyze: function(text) {
    if (!this.words) this._loadWords();
    
    var sentiment = {
      score: 0,
      comparative: 0,
      words: {
        matched: [],
        positive: [],
        negative: [],
        neutral: []
      }
    };
    
    var cleaned_text = this._clean(text);
    
    for (var word in cleaned_text) {
      var matched = this.words[cleaned_text[word]];
      
      if (matched) {
        sentiment.words.matched.push(cleaned_text[word]);
        sentiment.score += matched;
        
        if (matched  >  0) { sentiment.words.positive.push(cleaned_text[word]) } else
        if (matched  <  0) { sentiment.words.negative.push(cleaned_text[word]) } else
        if (matched === 0) { sentiment.words.neutral.push(cleaned_text[word])  }
      }
    }

    if (sentiment.words.matched.length > 0) {
      sentiment.comparative = sentiment.score/sentiment.words.matched.length;
    }
    
    return sentiment;
  }
  
  
};



/** EXPORT */
module.exports = Sediment;