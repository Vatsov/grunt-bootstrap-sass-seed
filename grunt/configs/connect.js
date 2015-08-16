/*
 Start a connect web server.
 https://github.com/gruntjs/grunt-contrib-connect
 */

var grunt = require('grunt');
var mountFolder = function (connect, dir) {
	'use strict';
	return connect['static'](require('path').resolve(dir));
};

// Custom connect middleware for proxying WebAPI requests to a real WebAPI server, e.g.
// Set APIURL=webapi1.dev1.dynamicaction.com:2060 as environment variable or pass it as a CLI option
function webapiMiddleware() {
	'use strict';

	return function (req, res, next) {
		console.log('Proxying: ', req.url);
		next();
	};
}

module.exports = {
	options: {
		port: 9000,
		hostname  : 'localhost',
		livereload: 35729,
		open: true
	},
	livereload: {
		options: {
			middleware: function (connect) {
				'use strict';

				var middlewares = [];
				middlewares.push(require('connect-livereload')());
				middlewares.push(connect().use('/assets/scripts/vendor', connect.static('node_modules')));
				middlewares.push(connect().use('/node_modules', connect.static('node_modules')));
				middlewares.push(webapiMiddleware());
				middlewares.push(mountFolder(connect, '.tmp'));
				middlewares.push(mountFolder(connect, './app'));

				return middlewares;
			}
		}
	}
};
