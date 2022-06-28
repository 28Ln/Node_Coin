var express = require('express')
var router = express.Router();
// ⚡ 接口工具，用于统一返回接口
const dbUtils = require('../utils/sequelizeDBUtils')
// ⚡ 接口工具，用于统一返回接口
const apiUtils = require('../utils/apiUtils')


router.get('/getCoinDataList', async (req, res) => {
    try{
        //const coin_data =await dbUtils.coin_data.findOne({ where: id=1 })
        const coin_data =await dbUtils.coin_data.findAll()
        apiUtils.sendSuccessMsg(res,coin_data , '请求成功')
    }catch(error){
        //resp.status(500).send(error)
    }
    //res.send('hello world!');
})

module.exports = router;
