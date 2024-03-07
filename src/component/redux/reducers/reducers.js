// import Add from '../actions/action'
const initalSate = {
    carts: []
}


export const cartreducer = (state = initalSate, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                carts: [...state.carts, action.payload]
            }

        case "RMV_CART":
            const data = state.carts.filter((e) => e.id !== action.payload)
            return {
                ...state,
                carts: data
            }
        default:
            return state

    }
}