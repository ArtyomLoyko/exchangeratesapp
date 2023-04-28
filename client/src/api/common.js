// export const SERVER = process.env.NODE_ENV === "production"
//   ? process.env.REACT_APP_SERVER_PROD
//   : process.env.REACT_APP_SERVER_LOCAL

export const SERVER = process.env.NODE_ENV === "production"
  ? 'https://exchangeratesapp.herokuapp.com'
  : 'http://localhost:4000'