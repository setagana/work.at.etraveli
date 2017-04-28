export const updateEmailValue = (emailValue) => {
  return {
    type: 'UPDATE_EMAIL_VALUE',
    emailValue
  }
}

export const setEmailValidity = (emailValid) => {
  return {
    type: 'SET_EMAIL_VALIDITY',
    emailValid
  }
}

export const updateBookingNumberValue = (bookingNumberValue) => {
  return {
    type: 'UPDATE_BOOKINGNUMBER_VALUE',
    bookingNumberValue
  }
}

export const setErrorText = (errorText) => {
  return {
    type: 'SET_ERRORTEXT',
    errorText
  }
}

export const toggleError = () => {
  return {
    type: 'errorExists'
  }
}

export const setAuthentication = (isAuthenticated) => {
  return {
    type: 'SET_AUTHENTICATION',
    isAuthenticated
  }
}