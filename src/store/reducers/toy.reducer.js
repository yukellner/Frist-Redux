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
        case 'SET_STATUS':
            return { ...state, status: action.status }
        default:
            return state
    }
}