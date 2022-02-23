const initialState = {
    statusModal: '',
    acces:'',
}

const rootReducer = (state = initialState, action ) => {
    if(action.type === 'ACTIVE') {
        return {
            ...state,
            statusModal: action.value
        }
    }else if(action.type === 'ACCES'){
        return {
            ...state,
            acces: action.value
        }
    }
    return state;
}

export default rootReducer;