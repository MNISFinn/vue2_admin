module.exports = {
    publicPath: './',
    outputDir: process.env.outputDir,
    productionSourceMap: false,
    devServer: {
        proxy: {
            'api': {
                target: 'https://api.fridaysoon.asia',
                // target: 'http://www.php8laravel8.com:9099',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        open: true
    }
}
