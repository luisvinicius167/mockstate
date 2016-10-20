module.exports = function (grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015-script']
      },
      dist: {
        files: {
          'dist/mockstate.js': 'src/mockstate.js'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/mockstate.min.js': ['dist/mockstate.js']
        }
      },
    },
      watch: {
        // for scripts, run jshint and uglify 
        scripts: {
          files: 'src/**/*.js', tasks: ['babel', 'uglify']
        }
      }
    });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('default', ['babel', 'uglify']);
}