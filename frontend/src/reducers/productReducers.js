const initialState = []

const productReducer = (state = action, initialState ) => {
    switch(action.type){
        case 'SET_PRODUCTS':
            return action.payload
        default:
            return state
    }
}

export default productReducer