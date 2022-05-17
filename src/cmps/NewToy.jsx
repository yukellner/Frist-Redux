// const { connect } = ReactRedux
import React from 'react'

import { connect } from 'react-redux'
import { Component } from 'react'
import { removeToy } from '../store/actions/toy-action.js'
import { loadToys } from '../store/actions/toy-action.js'
import { saveToy } from '../store/actions/toy-action.js'
import { toyService } from '../services/toy-service.js'
import { utilService } from '../services/util.service.js'

// import { carService } from '../services/car.service.js'
// import { showSuccessMsg } from '../services/event-bus.service.js'
// import { loadCars, removeCar, saveCar } from '../store/car.action.js'
// import { addToCart } from '../store/cart.action.js'

class _NewToy extends Component {

    state = {

        toy: {

            name: null,
            price: null,
            labels: [],
            createdAt: 1631031801011,
            inStock: false,
            reviews: []
        }
    }

    onHandleChange = ({target}) => {
        const value = target.value
        const field = target.name

        this.setState({toy: {...this.state.toy, [field]: value}})
        console.log('state',this.state)

    }

    onSave = (event) => {
        event.preventDefault()

        const toy = this.state.toy
        console.log('jusst toy',toy)
        this.props.saveToy(toy)
        // this.props.loadToys()


    }





    componentDidMount() {

    }
    componentDidUpdate() {

    }

    onRemoveToy = (toyId) => {
        this.props.removeToy(toyId)
        this.props.loadToys()
        



    }

    onAddReview = (toy) => {
        const rev = prompt('add a review')
        console.log('toy.reviews', toy)
        toy.reviews.push(rev)
        this.props.saveToy(toy)


    }




    render() {

        const { toys } = this.props
        return (
            <div className='new-toy'>
                <form type='onSubmit'>
                    <input type="text" name='name' onChange={this.onHandleChange} placeholder='toy name' />
                    <input type="text" name='price' onChange={this.onHandleChange} placeholder='toy price' />
                    <button onClick={this.onSave} >save</button>


                </form>

            </div>


        )
    }
}


const mapStateToProps = (storeState) => {
    return {
        toys: storeState.toyModule.toys
    }
}

const mapDispatchToProps = {
    loadToys,
    // toyService,
    removeToy,
    saveToy,
    // addToToy

}


export const NewToy = connect(
    mapStateToProps,
    mapDispatchToProps

)(_NewToy)
