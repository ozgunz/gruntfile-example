module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			group1: {
				files: {
					'js/scripts.min.js' : ['js/scripts.js']
				}				
			}
		}, // Minify JS
		sass : {
			group1: {
				files: {
					'css/view.css' : 'css/view.scss'
				}
			}
		}, // SASS
		serve: {
			options: {
				port: 9000
			}
		},
		watch: {
			css: {
				files: 'css/*.scss', 
				tasks: ['sass','cssmin'],
				options: {
                	livereload: 11241
				},
			},
			uglify:{
				files: 'js/scripts.js',
				tasks: ['uglify']
			}
		},
		cssmin: {
			group1: {
				files: {
					'css/view.min.css' : ['css/view.css']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', ['uglify','cssmin','sass', 'serve', 'watch']);
}