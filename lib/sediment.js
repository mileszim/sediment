import { WORDS } from './afinn-111';

const SPLIT_CHAR = ' ';


export default class Sediment {
  /**
   * Strips text of anything but letters, and converts to lower case, and breaks it into array
   * Borrowed with love from https://github.com/thisandagain/sentiment/blob/develop/lib/tokenize.js
   *
   * @param  {string} text Text to process/normalize
   * @return {string} Processed text
   */
  static clean(text) {
    return text.toLowerCase().replace(/[^a-z0-9á-úñäâàéèëêïîöôùüûœç\- ]+/g, '').replace('/ {2,}/',' ').split(SPLIT_CHAR);
  }


  /**
   * Analyze text and return a sentiment object
   *
   * @param  {string} text The text to parse
   * @return {object} Analysis of the text
   */
  static analyze(text, array = false) {
    let [score, comparative] = [0, 0];
    let [positive, negative, neutral, matched, unmatched] = [{},{},{},{},{}];
    let cleaned_text = this.clean(text);

    let current = cleaned_text.length;
    while(current--) {
      let word = cleaned_text[current];

      if (!WORDS.hasOwnProperty(word)) {
        (!!unmatched[word] && unmatched[word]++) || (unmatched[word] = 1);
        continue;
      } else {
        let word_score = WORDS[word];
        (!!matched[word] && matched[word]++) || (matched[word] = 1);
        score += word_score;
        if (word_score === 0)   { neutral[word] = true;  } else
        if (word_score  >  0)   { positive[word] = true; } else
     /* if (word_score  <  0)*/ { negative[word] = true; }
      }
    }

    let matched_length = Object.keys(matched).length;
    if (matched_length > 0) {
      comparative = score/matched_length;
    }

    return {
      score: score,
      comparative: comparative,
      words: {
        positive: Object.keys(positive),
        negative: Object.keys(negative),
        neutral: Object.keys(neutral),
        matched: matched,
        unmatched: unmatched
      }
    };
  }
}
