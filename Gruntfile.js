module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
	exec: {
	    build: {
		command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
	    }
	},

	less: {
	    development: {
		options: {
		    paths: ["app"]
		},
		files: {
		    "path/to/result.css": "path/to/source.less"
		}
	    },
	    production: {
		options: {
		    paths: ["assets/css"],
		    yuicompress: true
		},
		files: {
		    "path/to/result.css": "path/to/source.less"
		}
	    }
	}
    });
    
    grunt.registerTask('copy-require', function() {
	grunt.file.mkdir('build/js/lib');
	grunt.file.copy('node_modules/requirejs/require.js', 'build/js/lib/require.js');
    });
    
    grunt.registerTask('default', ['copy-require']);
};
