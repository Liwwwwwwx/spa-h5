module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.js'  
      },
      target: ['./js/*.js']                                            
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'                    
      },
      src: 'css/*.css'                  
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'                    
      },
      src: '*.html'             
    },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);

};
