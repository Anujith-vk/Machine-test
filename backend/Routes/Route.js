const express=require('express')
const { fetchproduct, Addproduct }= require('../Controller/Product')
const { MakeReservation, FetchReservation, CancelReservation } = require('../Controller/Reservation')
const route=express.Router()

route.post('/addproduct',Addproduct)
route.get('/products',fetchproduct)
route.post('/table/reservation',MakeReservation)
route.get('/reservations/display',FetchReservation)
route.delete('/reservation/cancel/:id',CancelReservation)

module.exports=route