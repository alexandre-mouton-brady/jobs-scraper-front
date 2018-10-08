var tailwindcss = require('tailwindcss');

module.exports = {
	module: true,
	plugins: [
		require('postcss-import'),
		tailwindcss('./tailwind.config.js'),
		require('autoprefixer'),
	],
};
