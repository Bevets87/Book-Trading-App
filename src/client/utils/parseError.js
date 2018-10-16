export default (error) => {
  const defaultMessage = 'An error occured...'
  return error ? error.message ? error.message : defaultMessage : defaultMessage  
}