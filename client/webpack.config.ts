import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const packageJson = require('./package.json');
const vendorDependencies = Object.keys(packageJson['dependencies']);

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Schooltastical',
    template: './static/index.template.html',
    minify: 'auto'
});

const tsModule = {
    test: /src\/.*?\.ts(x?)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'ts-loader'
        }
    ]
};

const sassModule = {
    test: [/\.s(c|a)ss$/],                
    use:[                    
     'style-loader',                  
     'css-loader',
     'sass-loader'
    ]    
};

const entry = {
    main: './src/Client.ts',
    vendor: vendorDependencies
};

const output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
};

const module = {
    rules: [tsModule, sassModule]
};

const resolve = {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(path.join(__dirname, 'node_modules'))]
};

const optimization = {
    splitChunks: {
        chunks: 'async' as 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 6,
        maxInitialRequests: 4,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        cacheGroups: {
            defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
};

const config: webpack.Configuration = {
    resolve,
    mode: 'development',
    entry,
    output,
    plugins: [htmlWebpackPlugin],
    devtool: 'source-map',
    module,
    optimization,
    node:{
        fs: 'empty'
    }
};

export default config;
