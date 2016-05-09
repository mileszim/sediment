/**
 * Runs benchmarks against sentiment and sediment.
 *
 * @package sediment
 * Borrowed with love from:
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var sediment = require('../dist/sediment-node');
var sentiment = require('sentiment');

/**
 * Test data
 */
var stringShort = 'This cat is totally awesome';
var stringLong = require('./fixtures/corpus');

/**
 * Setup
 */
suite
    .add('sentiment (1.0.6) - Short ', function () {
        sentiment(stringShort);
    })
    .add('sentiment (1.0.6) - Long  ', function () {
        sentiment(stringLong);
    })
    .add('sediment (Latest) - Short', function () {
        sediment.analyze(stringShort);
    })
    .add('sediment (Latest) - Long ', function () {
        sediment.analyze(stringLong);
    })
    .on('cycle', function (event) {
        process.stdout.write(String(event.target) + '\n');
    })
    .run({
        minSamples: 100,
        delay: 2
    });
