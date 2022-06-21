import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

//GET localhost:3000/flights
router.get('/', flightsCtrl.index)

//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

//GET localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

//GET localhost:3000/movies/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

//POST localhost:3000/flights
router.post('/', flightsCtrl.create)

//POST localhost:3000/flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

// localhost:3000/flights/:id
router.delete("/:id", flightsCtrl.delete)

// localhost:3000/flights/:id
router.put("/:id", flightsCtrl.update)

export {
	router
}
