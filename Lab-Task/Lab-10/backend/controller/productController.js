const Product = require('../model/productModel')

exports.getAllProducts = async(req ,res)=>{
    const product = await Product.find()
    res.status(200).json(product)

}
exports.updateProduct = async(req ,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        success:true
    })
}
exports.deleteProduct = async(req ,res)=>{
    const product = await Product.findByIdAndRemove(req.params.id)
    res.status(200).json({
        success:true
    })
    
}
exports.createProduct = async(req ,res)=>{
    const product = await Product.create(req.body)
    res.status(200).json(product);
}