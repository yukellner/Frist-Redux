// const { connect } = ReactRedux
import React from 'react'

import { connect } from 'react-redux'
import { Component } from 'react'
import { removeToy } from '../store/actions/toy-action.js'
import { loadToys } from '../store/actions/toy-action.js'
import { saveToy } from '../store/actions/toy-action.js'
import { userService } from '../services/user.service.js'

import { toyService } from '../services/toy-service.js'

// import { carService } from '../services/car.service.js'
// import { showSuccessMsg } from '../services/event-bus.service.js'
// import { loadCars, removeCar, saveCar } from '../store/car.action.js'
// import { addToCart } from '../store/cart.action.js'

class _ToyPreview extends Component {

    

    componentDidMount() {

    }
    componentDidUpdate() {

    }

    onRemoveToy = (toyId) => {
        this.props.removeToy(toyId)




    }

    onAddReview = (toy) => {
        const rev = prompt('add a review')
        console.log('toy.reviews', toy)
        toy.reviews.push(rev)
        this.props.saveToy(toy)


    }




    render() {

        if(!this.props.toys) return <h1>...loading</h1> 
        const { toys } = this.props
        return (
            <div className='toys-view'>

                

                {toys.map(toy =>
                    <li className="car-preview" key={toy._id}>
                        <h4>{toy.name}</h4>
                        <p>Price: <span>${toy.price.toLocaleString()}</span></p>
                        {/* <p>Owner: <span>{car.owner && car.owner.fullname}</span></p> */}
                        <div >
                            <button onClick={() => {
                                this.onRemoveToy(toy._id)
                            }}>x</button>
                            <button onClick={() => {
                                this.onEditToy(toy)
                            }}>Edit</button>
                        </div>
                        {<button onClick={() => this.onAddReview(toy)}>add review</button>}
                        {/* <button className="buy" onClick={() => {
                            this.onAddToy(toy)
                        }}>Add to Cart</button> */}

                    </li>)
                }
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


export const ToyPreview = connect(
    mapStateToProps,
    mapDispatchToProps

)(_ToyPreview)
