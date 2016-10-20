module.exports = function (grunt) {
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },
      dist: {
        files: {
          'dist/in.js': 'src/in.js'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/output.min.js': ['dist/mockstate.js']
        }
      },
    },
      watch: {

        // for stylesheets, watch css and less files 
        // only run less and cssmin stylesheets: { 
        // files: ['src//*.css', 'src//*.less'], 
        // tasks: ['less', 'cssmin'] },

        // for scripts, run jshint and uglify 
        scripts: {
          files: 'src/**/*.js', tasks: ['babel', 'uglify']
        }
      }
    });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('uglify', ['uglify']);
  grunt.registerTask('default', ['babel', 'uglify']);
}