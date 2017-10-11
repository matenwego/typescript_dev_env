import {Configuration} from 'webpack';
import * as path from 'path';

const config: Configuration = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    devtool: 'inline-source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style', 'css']
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src'),
        publicPath: '/'
    }
};

export default config;