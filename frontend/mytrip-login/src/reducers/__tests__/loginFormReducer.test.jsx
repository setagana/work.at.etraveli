import loginFormReducer from '../loginFormReducer'

describe('Login form reducer', () => {
    it('should handle initial state', () => {
        expect(
            loginFormReducer(undefined, {})
        ).toEqual({
            emailValue: '',
            emailValid: true,
            bookingNumberValue: ''
        })
    })

    it('should handle UPDATE_EMAIL_VALUE', () => {
        expect(
            loginFormReducer({
                emailValue: '',
                emailValid: true,
                bookingNumberValue: ''
            }, {
                type: 'UPDATE_EMAIL_VALUE',
                emailValue: 'info@test.com'
            })
        ).toEqual({
            emailValue: 'info@test.com',
            emailValid: true,
            bookingNumberValue: ''
        })

        expect(
            loginFormReducer({
                emailValue: 'info@test',
                emailValid: false,
                bookingNumberValue: ''
            }, {
                type: 'UPDATE_EMAIL_VALUE',
                emailValue: 'info@test.se'
            })
        ).toEqual({
            emailValue: 'info@test.se',
            emailValid: false,
            bookingNumberValue: ''
        })
    })

    it('should handle SET_EMAIL_VALIDITY', () => {
        expect(
            loginFormReducer({
                emailValue: 'info@test.se',
                emailValid: false,
                bookingNumberValue: ''
            }, {
                type: 'SET_EMAIL_VALIDITY',
                emailValid: true
            })
        ).toEqual({
            emailValue: 'info@test.se',
            emailValid: true,
            bookingNumberValue: ''
        })

        expect(
            loginFormReducer({
                emailValue: 'info@test.se',
                emailValid: true,
                bookingNumberValue: ''
            }, {
                type: 'SET_EMAIL_VALIDITY',
                emailValid: true
            })
        ).toEqual({
            emailValue: 'info@test.se',
            emailValid: true,
            bookingNumberValue: ''
        })

        expect(
            loginFormReducer({
                emailValue: 'info@test.se',
                emailValid: true,
                bookingNumberValue: ''
            }, {
                type: 'SET_EMAIL_VALIDITY',
                emailValid: false
            })
        ).toEqual({
            emailValue: 'info@test.se',
            emailValid: false,
            bookingNumberValue: ''
        })
    })

    it('should handle UPDATE_BOOKINGNUMBER_VALUE', () => {
        expect(
            loginFormReducer({
                emailValue: 'info@test.se',
                emailValid: false,
                bookingNumberValue: ''
            }, {
                type: 'UPDATE_BOOKINGNUMBER_VALUE',
                bookingNumberValue: '1234567'
            })
        ).toEqual({
            emailValue: 'info@test.se',
            emailValid: false,
            bookingNumberValue: '1234567'
        })

        expect(
            loginFormReducer({
                emailValue: 'info@test.se',
                emailValid: false,
                bookingNumberValue: '1234567'
            }, {
                type: 'UPDATE_BOOKINGNUMBER_VALUE',
                bookingNumberValue: '7654321'
            })
        ).toEqual({
            emailValue: 'info@test.se',
            emailValid: false,
            bookingNumberValue: '7654321'
        })
    })
})