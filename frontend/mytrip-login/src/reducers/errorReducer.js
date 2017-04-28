const initialState = {
    errorText: '',
    errorExists: false
}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ERRORTEXT':
            return { ...state, errorText: action.errorText }
        case 'TOGGLE_ERROR':
            return { ...state, errorExists: !state.errorExists }
        default:
            return state
    }
}