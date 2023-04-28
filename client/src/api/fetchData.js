import Axios from 'axios';
import {SERVER} from './common'

const converterApi = Axios.create({
  baseURL: `${SERVER}/converter`,
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
