module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			grunt.task.run([
				'build',
				'connect:dist:keepalive'
			]);
		}
		else {
			grunt.task.run([
				'clean:server',
				'compass',
				'connect:livereload',
				'watch'
			]);
		}
	});

	grunt.registerTask('deploy-prepare', [
		'clean:server',
		'compass',
		'useminPrepare',
		'imagemin',
		'concat',
		'copy',
		'cssmin',
		'uglify:dist',
		'rev',
		'usemin',
		'includeSource:dist'
	]);

	grunt.registerTask('build', [
		'compile',
		'deploy-prepare'
	]);

	grunt.registerTask('compile', [
		'clean:dist',
		'clean:server',
		'compass'
	]);
};
