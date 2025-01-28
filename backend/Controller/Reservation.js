const ReservationSchema=require('../Schema/Reservationschema')

const MakeReservation=async function (req,res) {
    try {
        const {name,number,email,date}=req.body;
        if(!name||!number||!email||!date){
            return res.status(400).json({message:"Please Provide All The Feilds"})
        }
        else{
            const response=await ReservationSchema.create(req.body)
            if(!response)
            {
                return res.status(400).json({message:"Failed To Place Reservation"})
            }
            else{
                return res.status(200).json({message:"Reservation placed Successfully",response})
            }
        }
    } catch (error) {
        return res.status(500).json({message:"Unexpected Error Occured",error:error.message})
    }
}

const FetchReservation=async function (req,res) {
    try {
        const response=await ReservationSchema.find({})
        if(!response)
        {
            return res.status(400).json({message:"Failed To Fetch Reservation"})
        }
        else{
            return res.status(200).json({message:"Reservation Fetched Successfully",reservation:response})
        }
    } catch (error) {
        return res.status(500).json({message:"Unexpected Error Occured",error:error.message})
    }
}

const CancelReservation=async function (req,res) {
    try {
        const {id}=req.params
        const response=await ReservationSchema.findByIdAndDelete(id)
        if(!response)
            {
                return res.status(400).json({message:"Failed To Cancel Reservation"})
            }
            else{
                return res.status(200).json({message:"Reservation Cancelled Successfully",reservation:response})
            }
    } catch (error) {
        return res.status(500).json({message:"Unexpected Error Occured",error:error.message}) 
    }
}

module.exports={MakeReservation,FetchReservation,CancelReservation}