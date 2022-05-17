import { toyService } from '../../services/toy-service.js'


export function loadToys() { // Action Creator
    return dispatch => {
        return toyService.query()
            .then(toys => {
                const action = {
                    type: 'SET_TOYS',
                    toys
                }
                dispatch(action)
            })
            .catch(err => {
                console.error('Error:', err)
                // showErrorMsg('Cannot load toys')
            })
    }
 }

 export function removeToy(toyId) { // Action Creator
    return (dispatch, getTheState) => {
        console.log('THE STATE IS', getTheState())
        toyService.remove(toyId)
            .then(() => {
                console.log('Deleted Succesfully!');
                // After async operation is done - dispatch an action to the reducer
                dispatch({
                    type: 'REMOVE_TOY',
                    toyId
                })
                // showSuccessMsg('Toy removed')
            })
            .catch(err => {
                console.error('Error:', err)
                // showErrorMsg('Cannot remove toy')
            })
    }
 }
 export function saveToy(toy) { // Action Creator
    return dispatch => {
        const actionType = (toy._id) ? 'UPDATE_TOY' : 'ADD_TOY'
        toyService.save(toy)
            .then(savedToy => {
                dispatch({ type: actionType, toy: savedToy })
                // showSuccessMsg('Toy saved')
            })
            .catch(err => {
                console.error('Error:', err)
                // showErrorMsg('Cannot save toy')
            })
    }
 }
 