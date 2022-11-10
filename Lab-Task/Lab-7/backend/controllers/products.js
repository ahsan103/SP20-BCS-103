const Product = require('../models/product')

exports.getAllProducts = async(req,res)=>{
    const product = await Product.find()
    res.status(200).json(product);
}
exports.createProducts = async(req,res)=>{
    const product = await Product.create(req.body)
    res.status(200).json(product);
}
exports.getProducts = async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.status(200).json(product);
}
exports.deleteProducts = async(req,res)=>{
    const product = await Product.findByIdAndRemove(req.params.id)
    res.status(200).json(product);
}
exports.updateProducts = async(req,res)=>{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(product)
}