import Axios from 'axios';

const converterApi = Axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}/converter`,
});

export const fetchRates = async (currencyOne) => {
  const { data } = await converterApi.get(
    '/latest',
    {
      headers: { jwt_token: localStorage.token },
      params: {
        base_currency: currencyOne,
        // currencies: ''
      }
    }
  );

  return data;
};

export const fetchSymbols = async () => {
  const { data } = await converterApi.get(
    '/currencies',
    {
      headers: { jwt_token: localStorage.token },
      params: {
        // currencies: ''
      }
    }
  );

  return data;
};
