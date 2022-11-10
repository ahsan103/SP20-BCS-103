const Product = require('../model/productModel')

exports.getProducts = async(req,res,next)=>{
    const product = await Product.find()
    res.status(200).json(product);
}
exports.getProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    res.status(200).json(product);
}
exports.createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(200).json(product);
}
exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findByIdAndRemove(req.params.id)
    res.status(200).json({
        message:"record deleted successfully "
    });
}
exports.updateProduct = async(req,res,next)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        message:"record updated successfully "
    });
}