const path = require('path');
const glob = require('glob');


const insertJs = glob.sync('./src/js/**/*.js');

let entryObj = {};

// 加入内容脚本
insertJs.filter((v)=>{
    let matched = v.match(/[^\/]*Insert\.js$/);
    if(matched!==null){
        let name = matched[0].replace('.js','');
        entryObj[name] = v;
    }
})

entryObj['index'] = './src/js/engine/index.js'
entryObj['background'] = './src/js/background.js'

console.log(entryObj)

module.exports = {
    entry: entryObj,    //打包入口
    output: {           //打包输出
        path: path.resolve(__dirname, 'dist/js'),
        filename: "[name].js"
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
