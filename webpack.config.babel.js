import webpack from 'webpack';
import path from 'path';
import 'babel-preset-es2017/polyfill';

module.exports = {
  entry: ["./src/riotux.js"],
  output: {
		path: path.resolve(__dirname, "build"),
    filename: "riotux.js"
  },
	 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'es2017']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}