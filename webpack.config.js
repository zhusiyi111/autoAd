const path = require('path');
const glob = require('glob');



module.exports = {
    // entry: {demo: "./src/page/demoPage/index.js"},    //打包入口
    entry: {
    	a:'./src/js/a.js'
    },
    output: {           //打包输出
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {       //模块配置
        rules: [
        	{        //模块规则
                test: /\.js$/,
                loader: "babel-loader?presets[]=es2015&presets[]=stage-0"
            }
        ]
    }
}
