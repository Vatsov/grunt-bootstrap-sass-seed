/*
 Minify PNG, JPEG and GIF images.
 https://github.com/gruntjs/grunt-contrib-imagemin
 */

module.exports = {
	options: {
		cache: false
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= config.app %>/assets/images',
			src: '{,*/}*.{gif,png,jpg,jpeg}',
			dest: '<%= config.dist %>/assets/images'
		}]
	}
};