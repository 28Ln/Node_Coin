/*
 * @Author: leon shh@byteflyer.com
 * @Date: 2022-06-23 16:50:33
 * @LastEditors: leon shh@byteflyer.com
 * @LastEditTime: 2022-06-23 17:40:31
 * @FilePath: \coin-express\utils\apiUtils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// init
function mounted () {
}
mounted()

const httpStatusEnums = {
    SUCCESS: '1', // 请求成功
    ERROR:'-1', // 请求失败
}

var apiUtils = {
    sendSuccessMsg : (res,data,msg) =>  {
        res.send(apiUtils.buildMsg(data,msg,'SUCCESS'))
    },
    sendErrorMsg: (res, data, msg) => {
       res.send(apiUtils.buildMsg(data,msg,'ERROR'))
    },
    buildMsg: (data, msg, type) => {
        if (type === 'SUCCESS') {
            const res = {
                code: httpStatusEnums.SUCCESS,
                msg: msg || '调用接口成功',
                data: data || null,
                request_time: new Date().getTime()
            }
            return res;
        } else if (type === 'ERROR') {
            const res = {
                code: httpStatusEnums.ERROR,
                msg: msg || '调用接口失败',
                data: data || null,
                request_time: new Date().getTime()
            }
            return res;
        }
    }
}
