const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css",
    disable: process.env.NODE_ENV === "development"
});
 
module.exports = {
  entry: ['./js/main.js', './sass/styles.scss'],
  output: { path: path.resolve(__dirname, 'build'), filename: 'scripts.js' },
  module: {
    rules: [
      {
		test: /\.scss$/,
		use: extractSass.extract({
			use: [{
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}],
			// use style-loader in development
			fallback: "style-loader"
		})
	  }
    ]
  },
  plugins: [
    extractSass
  ]
};