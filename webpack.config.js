//entry -> output
const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' //The output file that we want webpack to generate
    },

    //setting  up the loader 
    module: {
        rules: [
            {
            loader: 'babel-loader',
            test: /\.js$/, //This is reg expression to make sure that babel-loader only runs on files with .js expression
            exclude: /node_modules/ //Excludes node_modules folder so that it doesn't get compiled by the babel-loader
        },
        {
            test:/\.s?css$/,
            use:[ //we use 'use' instead of loader: because we need to use multiple loaders instead of just one.
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
        ]
    },
    devtool: 'eval-cheap-module-source-map', /* let's the browser know if there was an error in which file it was..if we don't use this the error 
    is shown with reference to bundle.js file and not the actual component file which makes it difficult to debug our app. */
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        injectClient: true,
        open: true
    }
};









// resolve: {
//     fallback: {
//         path: false,
//         util: false,
//         crypto: false,
//         buffer: false,
//         https: false,
//         http: false,
//         vm: false,
//         fs: false,
//         tls: false,
//         net: false,
//         os:false,
//         stream:false,
//         constants:false,
//         assert:false,
//         process:false
//     },
//     alias:{
//         process:"process/browser"
//     }
// },