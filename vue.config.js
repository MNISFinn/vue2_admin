module.exports = {
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        proxy: {
            'api': {
                target: 'http://api.fridaysoon.asia/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        open: true
    }
}
