var babel = require('rollup-plugin-babel');

module.exports = function(grunt) {

  // Configuration.
  grunt.initConfig({
    rollup: {
      options: {
        format: 'cjs',
        plugins: [
          babel({
            presets: ['es2015-rollup']
          })
        ]
      },
      files: {
        src: 'lib/sediment.js',
        dest: 'dist/sediment-node.js'
      }
    },
    browserify: {
      options: {
        banner: '/*! sediment.js <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        browserifyOptions: {
          standalone: 'Sediment'
        },
        transform: [
          ["babelify", {
            presets: ['es2015'],
            plugins: ['add-module-exports'],
            comments: false
          }]
        ]
      },
      files: {
        src: 'lib/sediment.js',
        dest: 'dist/sediment.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! sediment.min.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src:  'dist/sediment.js',
        dest: 'dist/sediment.min.js'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-rollup');

  // Tasks
  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['rollup', 'browserify', 'uglify']);
};
