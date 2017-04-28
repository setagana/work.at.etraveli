import {combineReducers } from 'redux'
import loginFormReducer from './loginFormReducer'
import authenticationReducer from './authenticationReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
    loginFormState: loginFormReducer,
    authenticationState: authenticationReducer,
    errorState: errorReducer
})

export default rootReducer