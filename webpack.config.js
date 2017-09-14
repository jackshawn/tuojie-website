var path = require('path')
var webpack = require('webpack')
var htmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
        index: './js/index.js',
        news: './js/news.js',
        contact: './js/contact.js',
        about: './js/about.js',
        joinus1: './js/joinus1.js',
        joinus2: './js/joinus2.js',
        product: './js/product.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            template: 'news.html',
            filename: 'news.html',
            chunks: ['news']
        }),
        new htmlWebpackPlugin({
            template: 'contact.html',
            filename: 'contact.html',
            chunks: ['contact']
        }),
        new htmlWebpackPlugin({
            template: 'about.html',
            filename: 'about.html',
            chunks: ['about']
        }),
        new htmlWebpackPlugin({
            template: 'joinus1.html',
            filename: 'joinus1.html',
            chunks: ['joinus1']
        }),
        new htmlWebpackPlugin({
            template: 'joinus2.html',
            filename: 'joinus2.html',
            chunks: ['joinus2']
        }),
        new htmlWebpackPlugin({
            template: 'product.html',
            filename: 'product.html',
            chunks: ['product']
        }),
        new ExtractTextPlugin('css/[name].css'),
	    new webpack.optimize.UglifyJsPlugin({
		    compress: {
			    warnings: false
		    }
	    })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    devServer: {
        port: 8080
    }
}