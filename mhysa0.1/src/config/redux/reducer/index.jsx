const initialState = {
    statusModal: '',
}

const rootReducer = (state = initialState, action ) => {
    if(action.type === 'ACTIVE') {
        return {
            ...state,
            statusModal: action.value
        }
    }
    return state;
}

export default rootReducer;