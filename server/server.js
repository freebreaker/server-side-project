require('babel-polyfill')

// Javascript required hook
require('babel-register')

// Css required hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})
// require('css-modules-require-hook')({
//     generateScopedName: '[name]__[local]__[hash:base64:8]'
// })
// Image required hook
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})

require('./support.js')