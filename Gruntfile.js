module.exports = function(grunt) {

  grunt.initConfig({
	karma: {
	  unit: {
	    configFile: 'karma.conf.js'
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
              cwd: 'app/assets/css',
              src: ['*.css', '!*.min.css'],
              dest: 'app/assets/css',
              ext: '.min.css'
            }]
      }
    }
  });

 	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('dist', ['cssmin']);
};