module.exports = function(grunt) {
  //grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    /*
exec: {
build: {
command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
}
},
     */
    requirejs: {
      compile: {
        options: {
          name: "app",
          baseUrl: "app/js",
          mainConfigFile: "app/js/main.js",
          out: "build/js/lib/app.js"
        }
      }
    },

    less: {
      production: {
        options: {
          compress: true,
          yuicompress: true
        },
        files: {
          "build/app.css": "app/less/app.less"
	}
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js']
    }

  });

  /*grunt.registerTask('copy-require', function() {
    grunt.file.mkdir('build/js/lib');
    grunt.file.copy('node_modules/requirejs/require.js', 'build/js/lib/require.js');
  });*/

  grunt.registerTask('default', ['jshint', 'requirejs', 'less']);
};
