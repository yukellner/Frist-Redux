import { userService } from '../../services/user.service.js'

import { showSuccessMsg } from '../../services/event-bus.service.js'

export function addToCart(car) {
    return (dispatch)=>{
        dispatch({
            type: 'ADD_TO_CART',
            car
        })
    }
}
export function removeFromCart(carId) {
    return (dispatch)=>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            carId
        })
    }
}
export function checkout(cartTotal) {
    return (dispatch)=>{
        userService.updateBalance(-cartTotal)
            .then(newBalance => {
                showSuccessMsg('Charged you: $' + cartTotal.toLocaleString() + ` - Your balance: ${newBalance}`)
                dispatch({ type: 'CLEAR_CART'})
                dispatch({ type: 'SET_USER_BALANCE', balance: newBalance })
            })
    }
}