const path = require('path');
const glob = require('glob');



module.exports = {
    // entry: {demo: "./src/page/demoPage/index.js"},    //打包入口
    entry: './src/js/engine/index.js',
    output: {           //打包输出
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js"
    },
    module: {       //模块配置
        rules: [
        	{        //模块规则
                test: /\.js$/
            }
        ]
    },
    devtool: '#source-map'
}
