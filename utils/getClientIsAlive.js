/*
 * @Author: leon shh@byteflyer.com
 * @Date: 2022-06-23 19:43:42
 * @LastEditors: leon shh@byteflyer.com
 * @LastEditTime: 2022-06-23 19:46:09
 * @FilePath: \coin-express\utils\getClientIsAlive.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ⚡ Websocket Server
var webscoket_module = require('./websocket/webscoket_server_module'); 
// ⚡ 日志工具
const Log = require('./utils/loggerUtils')
// ⚡ 事件循环
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
setInterval(() => {
    
}, 1000);
