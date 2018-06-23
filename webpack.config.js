const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin')
const analyzer = require('webpack-bundle-analyzer');

var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir);
}


var common = {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: '"production"'
            }
          }),
        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // override `exclude` and `failOnError` behavior
            // `onDetected` is called for each module that is cyclical
            onDetected({ paths, compilation }) {
                // `paths` will be an Array of the relative module paths that make up the cycle
                compilation.errors.push(new Error(paths.join(' -> ')))
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   },
        //   // beautify: true,
        //   // mangle: false,
        //   sourceMap: false
        // })
        // new analyzer.BundleAnalyzerPlugin()
    ],
    module: {
        rules: [{
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader',
                }, {
                    loader: 'ts-loader',
                    // ts-loader will cache this option and will reuse it whenever ts-loader is called again
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: [{
                            loader: 'babel-loader',
                        }, {
                            loader: 'ts-loader',
                        }]
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            '@': resolve('src'),
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
}
module.exports = [
    Object.assign({
        entry: {
            app: './src/index.ts'
        },
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        devtool: 'source-map',
    }, common)
];
