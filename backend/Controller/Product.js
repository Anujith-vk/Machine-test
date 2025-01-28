const ProductSchema=require('../Schema/Productschema')


const Addproduct=async function (req,res) {
    try {
        const{category,name,price,description}=req.body
        if(!name||!category||!price||!description){
            return res.status(400).json({message:"Please Provide All the Feilds"})
        }
        else{
            const response=await ProductSchema.create(req.body)
            if(!response)
            {
                return res.status(400).json({message:"Failed to Add Product"})
            }
            else{
                return res.status(200).json({message:"Product Added Successfully",product:response})
            }
        }
    } catch (error) {
        return res.status(500).json({message:"Unexpected Error Occured",error:error.message})
    }
}

const fetchproduct=async function (req,res) {
    try {
        const response=await ProductSchema.find({})
        if(!response)
        {
            return res.status(400).json({message:"Failed to Fetch Products"})
        }
        else
        {
            return res.status(200).json({message:"Products Fetched Successfully",products:response})
        }
    } catch (error) {
        return res.status(500).json({message:"Unexpected Error Occured",error:error.message})
    }
}

module.exports= {Addproduct,fetchproduct}