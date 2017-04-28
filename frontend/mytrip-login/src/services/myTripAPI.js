import { Left, Right } from '../../utils/generalUtils';
import { genSaltSync, hashSync } from 'bcryptjs';

const getUserSalt = email => {
  // In a (more) secure app, the salt would be provided by an API request to the server
  // For more info on this approach, see https://github.com/dxa4481/clientHashing
  return genSaltSync(10)
};

const defaultConfig = {
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
};

const successfulResponse = response =>
  (response.status >= 200 && response.status < 300);

const eitherSuccessOrFail = response =>
  successfulResponse(response)
    ? Right(response)
    : Left(response);

const handleError = response => {
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  console.log(error.status);
  error.response = response;
  throw error;
};

const checkStatus = response => 
  eitherSuccessOrFail(response)
    .fold(
      () => handleError(response),
      () => response
    );

const parseJSON = response =>
  response.json();

export const login = (email, bookingNumber) => {
  let salt = getUserSalt(email);
  bookingNumber = hashSync(bookingNumber, salt);
  fetch('/login',
    Object.assign({}, defaultConfig, {
      method: 'POST',
      body: JSON.stringify({ email, bookingNumber }),
    })
  ).then(checkStatus)
   .then(parseJSON)
}