import Axios from 'axios';

const authApi = Axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}/auth`,
});

export const register = async ( email, password, name ) => {
  const {data} = await authApi.post(
    '/register',
    {email, password, name},
    {
      headers: {"Content-type": "application/json"},
    }
  )

  return data;
};

export const logIn = async ( email, password ) => {
  const {data} = await authApi.post(
    '/login',
    {email, password},
    {
      headers: {"Content-type": "application/json"},
    }
  )

  return data;
};

export const verify = async () => {
  const {data} = await authApi.get(
    '/verify',
    {
      headers: { jwt_token: localStorage.token }
    }
  )

  return data;
};
