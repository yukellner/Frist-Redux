import { connect } from 'react-redux'
import {Component} from 'react'
import React from 'react'



import { showSuccessMsg } from '../services/event-bus.service.js'
import { toyService } from '../services/toy-service.js'
import { loadToys } from '../store/actions/toy-action'
import { saveToy } from '../store/actions/toy-action'
import { ToyPreview } from '../cmps/ToyPreview.jsx'
// import { addToToy } from '../store/actions/toy.action.js'


class _Home extends Component {
    componentDidMount() {
        this.props.loadToys()
    }
    componentDidUpdate() {
    }
    
    
    onAddToy = () => {
        const toy = toyService.getEmptytoy();
        this.props.saveToy(toy)
        this.props.loadToys()
        
    }
    onEditToy = (toy) => {
        const price = +prompt('New price?');
        const toyToSave = { ...toy, price }
        this.props.saveToy(toyToSave)
        
    }
    addToToy = (toy) => {
        console.log(`Adding ${toy.vendor} to Toy`);
        this.props.addToToy(toy)
        showSuccessMsg('Added to Toy')
        
    }
    render() {
        // const { toys } = this.props
        return (
            <div>
                {/* {!this.props.loadToys() && <div>loading</div>} */}
                <h3>Toys App</h3>
                <main >
                    <button onClick={this.onAddToy}>Add Toy ⛐</button>
                    <ul className="toy-list">
                    <ToyPreview/>
                    </ul>
                </main>
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
    // removeToy,
    saveToy,
    // addToToy
}


export const Home = connect(
    mapStateToProps,
    mapDispatchToProps

)(_Home)
