/*
 * @Author: 28Ln 108311769+28Ln@users.noreply.github.com
 * @Date: 2022-06-23 19:15:07
 * @LastEditors: 28Ln 108311769+28Ln@users.noreply.github.com
 * @LastEditTime: 2022-06-28 09:52:24
 * @FilePath: \coin-express\utils\osUtils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const os = require("os")
// ⚡ 日志工具
const Log = require('../utils/loggerUtils')


Log.d(`返回操作系统的默认临时文件夹:${os.tmpdir()}`);
Log.d(`返回 CPU 的字节序:${os.endianness()}`);
Log.d(`返回操作系统的主机名:${os.hostname()}`);
Log.d(`返回操作系统名:${os.type()}`);
Log.d(`返回编译时的操作系统名:${os.platform()}`);
Log.d(`返回操作系统 CPU 架构:${os.arch()}`);
Log.d(`返回操作系统的发行版本:${os.release()}`);
Log.d(`返回操作系统运行的时间:${(os.uptime() / 60 / 60 / 24)}`);
Log.d(`返回系统内存总量:${os.totalmem()}`);
Log.d(`返回操作系统空闲内存量:${os.freemem()}`);
Log.d(`返回一个对象数组，包含所安装的每个 CPU/内核的信息:${JSON.stringify(os.cpus())}`);
Log.d(`获得网络接口列表:${JSON.stringify(os.networkInterfaces())}`);
