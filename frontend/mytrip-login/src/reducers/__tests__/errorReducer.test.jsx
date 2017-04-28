import errorReducer from '../errorReducer'

describe(errorReducer, () => {
    it('should handle initial state', () => {
        expect(
            errorReducer(undefined, {})
        ).toEqual({
            errorText: '',
            errorExists: false
        })
    })

    it('should handle SET_ERRORTEXT', () => {
        expect(
            errorReducer({
                errorText: '',
                errorExists: false
            }, {
                type: 'SET_ERRORTEXT',
                errorText: 'Unauthorized login'
            })
        ).toEqual({
            errorText: 'Unauthorized login',
            errorExists: false
        })

        expect(
            errorReducer({
                errorText: 'Unauthorized login',
                errorExists: true
            }, {
                type: 'SET_ERRORTEXT',
                errorText: 'Server unavailable'
            })
        ).toEqual({
            errorText: 'Server unavailable',
            errorExists: true
        })
    })

    it('should handle TOGGLE_ERROR', () => {
        expect(
            errorReducer({
                errorText: 'Server unavailable',
                errorExists: true
            }, {
                type: 'TOGGLE_ERROR'
            })
        ).toEqual({
            errorText: 'Server unavailable',
            errorExists: false
        })

        expect(
            errorReducer({
                errorText: 'Server unavailable',
                errorExists: false
            }, {
                type: 'TOGGLE_ERROR'
            })
        ).toEqual({
            errorText: 'Server unavailable',
            errorExists: true
        })
    })
})