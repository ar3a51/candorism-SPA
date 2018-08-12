const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        entry: [
            "./src/app/main.js"
        ],
        plugins:[
        new CopyWebpackPlugin(
            [
              {
                from: './public',
                to: './dist',
                ignore: [
                  'index.html',
                  '.DS_Store'
                ]
              }
            ]
          )
        ]
    }
}