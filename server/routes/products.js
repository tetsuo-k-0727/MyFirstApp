const express = require('express')
const product = require('../model/product')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res){

    //DBから情報を取得
    Product.find({}, function(err, foundProducts){
        return res.json(foundProducts)

    })
})

router.get('/:productId', function(req, res){
    //URLのproductIdを取得
    const productId = req.params.productId

    //DBから情報を取得
    //productIdがある場合はfoundProductで商品の詳細が返される
    Product.findById(productId, function(err, foundProduct){
        if(err){
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
        }

        return res.json(foundProduct)

    })
})

//routerモジュールをエクスポート
module.exports = router