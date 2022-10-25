export const getError = (error) => {
  //getError accepts an error object
  return error.response && error.response.data.message //if error response and error message exists
    ? error.response.data.message //then return the message from the backend
    : error.message; //otherwise return a general error mesage from the error object
};
