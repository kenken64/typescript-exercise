module.exports = {
    entry: './src/app.ts',
    output: {
        path:'./dist',
        filename:'app.bundle.js',
    },
    resolve:{
        extensions:['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}