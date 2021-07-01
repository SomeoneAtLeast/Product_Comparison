
const initialState = {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Workers-Loaded":
            return {
                ...state,
                workers: action.workers,
            }  
        default:
            return state;    
    }
}

export default reducer;