module.exports = function(grunt) {

grunt.initConfig({
	karma: {
	  unit: {
	    configFile: 'karma.conf.js'
	  }
	},
  sass: {                            
    dist: {                           
      options: {                       
        style: 'expanded'
      },
      files: {                       
        'app/assets/css/main.css': 'app/assets/sass/main.scss'
      }
    }
  },
  uglify: {
    my_target: {
      files: {
        'app/dist/main.min.js': ['app/*.js', 'app/*.js', '!app/dist/*.js']
      }
    }
  },
  copy: {
      main: {
        src: ['app/src/*.css'],
        dest: 'app/dist'
      }
  },
	cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
            files: [{
              expand: true,
              flatten: true,
              src: 'app/assets/css/*.css',
              dest: 'app/dist',
              ext: '.min.css'
            }]
      }
    }
  });

 	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('dist', ['sass', 'cssmin', 'uglify']);
};