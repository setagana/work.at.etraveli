const initialState = {
    isAuthenticated: false
}

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_AUTHENTICATION':
            return { ...state, isAuthenticated: action.isAuthenticated }
        
        default:
            return state
    }
}