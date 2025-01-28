const mongoose=require('mongoose')
const product=mongoose.Schema({
    category:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
})
const ProductSchema=mongoose.model('ProductSchema',product)
module.exports=ProductSchema