const Products = require('../models/products');
const Views = require('../views/productViews');
const List = async (req, res)=>{
    const conditions= {}
    if (req.query._id){
        conditions._id= req.query._id;
    }
    try{
        const result = await Products.find(conditions);
        console.log(result);
        res.json(result);
    }
    catch (error){
        console.log(error);
        res.json(Views.generateJsonError(error));
    }
}
const Create = async (req, res) => {
    try{
    const doc = await Products.create(req.body);
    console.log(doc);
    res.json({success:true, id:doc._id});
    }
    catch(error){
        console.log(error);
        res.json(Views.generateJsonError(error))
    }
}
const Update = async (req,res)=> {
    try{
        const newProduct = await Products.findOneAndUpdate({_id:req.params.productId},{$set:req.body},{new:true});
        if (newProduct ===null){
        return res.json({success: false, error:'Producto no encontrado'})
        }
        res.json({success:true, id:newProduct._id, data:newProduct})
    }
    catch (error){
        console.log(error);
        return res.json(Views.generateJsonError(error));
    }
}
const Delete = async (req, res)=> {
    try{
        const deleteProduct = await Products.deleteOne({_id:req.params.productId});
        if (deleteProduct.deletedCount === 0){
            return res.json(Views.generateJsonError('Producto no encontrado'))
        }
        return res.json(Views.generateJsonSuccess(req.params.productId))
    }
    catch(error){
        return res.json(Views.generateJsonError(error))
    }
}
module.exports = {List, Create, Update, Delete};