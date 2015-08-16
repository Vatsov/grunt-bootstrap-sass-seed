/*
 Run tests with karma.
 https://github.com/karma-runner/grunt-karma
 */

var grunt = require('grunt');
if (grunt.option('karma-unit-port') === undefined) {
	grunt.option('karma-unit-port', '7000');
}

module.exports = {
	unit: {
		singleRun: true,
		port: grunt.option('karma-unit-port'),
		browsers: ['PhantomJS'],
		configFile: 'config/karma-unit.conf.js'
	}
};
