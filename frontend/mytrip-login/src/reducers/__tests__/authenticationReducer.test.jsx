import authenticationReducer from '../authenticationReducer'

describe('Authentication reducer', () => {
    it('should handle initial state', () => {
        expect(
            authenticationReducer(undefined, {})
        ).toEqual({ isAuthenticated: false })
    })

    it('should handle SET_AUTHENTICATION', () => {
        expect(
            authenticationReducer({ isAuthenticated: false }, {
                type: 'SET_AUTHENTICATION',
                isAuthenticated: true
            })
        ).toEqual({ isAuthenticated: true })

        expect(
            authenticationReducer({ isAuthenticated: true }, {
                type: 'SET_AUTHENTICATION',
                isAuthenticated: false
            })
        ).toEqual({ isAuthenticated: false })
    })
})