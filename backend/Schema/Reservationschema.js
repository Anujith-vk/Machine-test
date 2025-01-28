const mongoose=require('mongoose')
const reservation=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})

const ReservationSchema=mongoose.model('ReservationSchema',reservation)
module.exports=ReservationSchema