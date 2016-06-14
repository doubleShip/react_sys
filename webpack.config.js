var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');

var env = process.env.NODE_ENV;

//输出HTML和CSS等等文件到路径的插件
var CopyWebpackPlugin = require('copy-webpack-plugin');

var vendor = ['react','react-dom','moment','react-redux','react-tap-event-plugin','material-ui','react-data-components','react-highcharts']; // 第三方库包

//var deps = [
//    'react/dist/react.min.js',
//    'react-router/umd/ReactRouter.min.js',
//    'react-redux/dist/rreact-redux.min.js',
//    'moment/min/moment.min.js'
//];

var config = {
    //配置热替换服务器,每次改变JS文件都会自动刷新浏览器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './src', // 配置服务器地址
        port: 9121
    },
    //生成sourcemap,便于开发调试,正式打包请去掉此行或改成none
    devtool: "source-map",
    //入口文件,需要处理的文件路径
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9121',
        //上面2个是开发的时候用的热替换服务器
        path.resolve(__dirname, './src/js/app.jsx')
    ],
    output: {
        //绝对路径,用于输出到位置,文件输出目录
        path: path.join(__dirname, "dist"),
        //服务路径,用于热替换服务器,用于配置文件发布路径，如CDN或本地服务器
        publicPath: "/",
        chunkFilename: "[name].chunk.js",
        filename: "[name].js"      //根据入口文件输出的对应多个文件名
    },
    module: {
        //各种加载器，即让各种文件格式可用require引用
        loaders: [
            //{ test: /\.es6$/, loader: 'es6-loader' },
            //{ test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            //使用babel-loader来解析js,es6文件
            {
                test: /\.(js|es6|jsx)$/,
                loader: ['babel-loader'],
                //然后指定作用范围,这里可不写,但是范围越小速度越快
                include: path.resolve(__dirname, 'src/js/'),
                //排除目录,exclude后将不匹配
                exclude: /node_modules/,
                query: {presets: ['react','es2015','stage-0']}
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'react-hot!jsx-loader?harmony'
            },
            //.css 文件使用 style-loader 和 css-loader 来处理
            //{ test: /\.css$/, loader: 'style!css' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            //对于css文件，默认情况下webpack会把css content内嵌到js里边，运行时会使用style标签内联
            { test: /\.scss$/, loader: 'style!css!sass' },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            //图片资源在加载时先压缩，然后当内容size小于~10KB时，会自动转成base64的方式内嵌进去
            //当图片大于10KB时，则会在img/下生成压缩后的图片，命名是[hash:8].[name].[ext]的形式
            //hash:8的意思是取图片内容hushsum值的前8位，这样做能够保证引用的是图片资源的最新修改版本，保证浏览器端能够即时更新
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'image?{bypassOnDebug: true, progressive:true, optimizationLevel: 3, pngquant:{quality: "65-80"}}',
                    'url?limit=10000&name=img/[hash:8].[name].[ext]'
                ]
            },
            {
                test: /\.(woff|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            }
        ],
        noParse: [] //noParse 是 webpack 的另一个很有用的配置项，如果你 确定一个模块中没有其它新的依赖 就可以配置这项，webpack 将不再扫描这个文件中的依赖。
    },
    resolve: {
        //引入文件时可以省略的后缀
        extensions: ['', '.js', '.jsx', '.es6'],
        //配置别名，在项目中可缩减引用路径
        alias: {
            //'react': pathToReact
            //jquery: path.join(__dirname, "src/bower_components/jquery/dist/jquery.min.js")
        }
        //externals: {//externals 对象的 key 是给 require 时用的
        //    "react": "React",
        //    "react-dom": "ReactDOM"
        //}
    },
    plugins: [
        //提供全局的变量，在模块中使用无需用require引入
        //new webpack.ProvidePlugin({
        //    "react": "React"
        //}),
        //忽略插件
        //new webpack.IgnorePlugin(/react/),
        //将公共代码抽离出来合并为一个文件
        // new webpack.optimize.CommonsChunkPlugin(
        //     {
        //         name:"vendor",
        //         filename:"vendor.bundle.js",
        //         minChunks:Infinity
        //     }
        // ),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        //热替换插件
        new webpack.HotModuleReplacementPlugin(),
        //输出文件插件
        new CopyWebpackPlugin([
            { from: './src/index.html', to: 'index.html' },
        ])
    ]
};

//发布操作
if (env === 'production') {
    config.plugins.push(
        //js文件的压缩,以下代码为压缩代码插件,在打包的时候用,开发环境下会减慢编译速度
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                warnings: false
            }
        })
    )
}

// 通过在第一部分路径的依赖和解压
// 就是你像引用 node 模块一样引入到你的代码中
// 然后使用完整路径指向当前文件，然后确认 Webpack 不会尝试去解析它

//deps.forEach(function (dep) {
//    var depPath = path.resolve(node_modules_dir, dep);
//    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//    config.module.noParse.push(depPath);
//});

module.exports = config;