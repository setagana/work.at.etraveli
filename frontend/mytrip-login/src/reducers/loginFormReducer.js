const initialState = {
    emailValue: '',
    emailValid: true,
    bookingNumberValue: ''
};

export default function loginFormReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_EMAIL_VALUE':
            return { ...state, emailValue: action.emailValue }

        case 'SET_EMAIL_VALIDITY':
            return { ...state, emailValid: action.emailValid }

        case 'UPDATE_BOOKINGNUMBER_VALUE':
            return { ...state, bookingNumberValue: action.bookingNumberValue }

        default:
            return state
    }
    
}