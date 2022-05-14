import { carService } from '../../services/car.service.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'

export function loadCars() { // Action Creator
   return dispatch => {
       return carService.query()
           .then(cars => {
               const action = {
                   type: 'SET_CARS',
                   cars
               }
               dispatch(action)
           })
           .catch(err => {
               console.error('Error:', err)
               showErrorMsg('Cannot load cars')
           })
   }
}

export function removeCar(carId) { // Action Creator
   return (dispatchPlease, getTheState) => {
       console.log('THE STATE IS', getTheState())
       carService.remove(carId)
           .then(() => {
               console.log('Deleted Succesfully!');
               // After async operation is done - dispatch an action to the reducer
               dispatchPlease({
                   type: 'REMOVE_CAR',
                   carId
               })
               showSuccessMsg('Car removed')
           })
           .catch(err => {
               console.error('Error:', err)
               showErrorMsg('Cannot remove car')
           })
   }
}
export function saveCar(car) { // Action Creator
   return dispatch => {
       const actionType = (car._id) ? 'UPDATE_CAR' : 'ADD_CAR'
       carService.save(car)
           .then(savedCar => {
               dispatch({ type: actionType, car: savedCar })
               showSuccessMsg('Car saved')
           })
           .catch(err => {
               console.error('Error:', err)
               showErrorMsg('Cannot save car')
           })
   }
}

