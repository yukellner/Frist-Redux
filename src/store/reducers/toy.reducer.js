const initialState = {
    toys: []
    // _id: getid,
    // name: '',
    // price: '',
    // labels: '',
    // createdAt: '',
    // inStock: false
    }


export function toyReducer(state = initialState, action) {
    var toys
    switch (action.type) {
        case 'SET_TOYS':
            return { ...state, toys: action.toys }
        case 'ADD_TOY':
            toys = [action.toy, ...state.toys]
            return { ...state, toys: toys }
        // case 'Save':
        //     // toys = state.toys.filter(toy => toy._id !== action.toyId)
        //     return { ...state, status: action.status }
        case 'REMOVE_TOY':
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys }
        default:
            return state
    }
}