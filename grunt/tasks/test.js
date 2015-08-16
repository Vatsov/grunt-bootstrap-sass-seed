module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('test', [
		'clean:server',
		'compass',
		'tests-unit'
	]);

	grunt.registerTask('tests-unit', [
		'karma:unit'
	]);

};
