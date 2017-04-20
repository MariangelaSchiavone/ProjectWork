  module.exports = function(grunt) {

    grunt.initConfig({


      less: {
        development: {
          files: {
            'main.css': ['main.less']
            }
          }
        },


      watch: {
        less:{
          files: ['**/*.less'],
          tasks: ['less']
          }
        }
      });



    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');


  };
