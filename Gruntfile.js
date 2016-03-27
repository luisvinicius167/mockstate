module.exports = function (grunt) {
grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: '../test'
        }
      }
    },
    shell: {
      compileRiot: {
          command: 'riot test/tags test/js/build.js'
      }
    },
    // task watch
  watch: {
    project: {
      files: ['**/*.js', '**/*.html'],
      options: {
        livereload: true
      }
    },
    riotFiles: {
      files: ['**/*.tag'],
      tasks: ['shell'],
      options: {
        livereload: true
      }
    }
  }
});
grunt.loadNpmTasks('grunt-shell');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.registerTask('default', ['connect', 'watch']);
};