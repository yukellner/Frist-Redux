import { connect } from 'react-redux'
import { Component } from 'react'
import React from 'react'



import { showSuccessMsg } from '../services/event-bus.service.js'
import { toyService } from '../services/toy-service.js'
import { loadToys } from '../store/actions/toy-action'
import { saveToy } from '../store/actions/toy-action'
import { ToyPreview } from '../cmps/ToyPreview.jsx'
import { NewToy } from '../cmps/NewToy.jsx'
import { MapCmp } from '../cmps/MapCmp.jsx'

// import { addToToy } from '../store/actions/toy.action.js'


class _About extends Component {

    state = {
        addStyle: { visibility: 'hidden' }
    }

    onAddToy = () => {
        this.setState({ addStyle: { visibility: 'visible' } })

    }


    componentDidMount() {
        this.props.loadToys()
    }
    componentDidUpdate() {
    }


    // onAddToy = () => {
    //     const toy = toyService.getEmptytoy();
    //     this.props.saveToy(toy)
    //     this.props.loadToys()

    // }
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
        // if(!this.props.loadToys()) return <h1>loading...</h1>
        return (
            <div>
                {/* {!this.props.loadToys() && <div>loading</div>} */}
                <h3>About</h3>
                <MapCmp/>


                {/* <main >
                    <button onClick={this.onAddToy}>Add Toy ⛐</button>
                    <div style={this.state.addStyle}>
                        <NewToy />
                    </div>
                    <ul className="toy-list">
                        <ToyPreview />
                    </ul>
                </main> */}
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


export const About = connect(
    mapStateToProps,
    mapDispatchToProps

)(_About)
