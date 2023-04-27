import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchRates, fetchSymbols } from '../api/fetchData';

export const useCurrency = () => {
  const [amount, setAmount] = useState(1);
  const [currencyOne, setCurrencyOne] = useState('USD');
  const [currencyTwo, setCurrencyTwo] = useState('ILS');

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ['rates', currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
        select: ({ data, /* timestamp */ }) => {
          // return { data, /* timestamp */ };
          return data;
        },
        keepPreviousData: true,
      },
      {
        queryKey: ['symbols'],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ data }) => data,
      },
    ],
  });

  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  const convertedAmount = (ratesData.data?.[currencyTwo] * amount).toFixed(
    2
  );

  const date = new Date(ratesData.data?.date).toLocaleDateString();
  const time = new Date(ratesData.data?.timestamp).toLocaleTimeString('en-US');

  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {};

  return {
    amount,
    setAmount,
    currencyOne,
    setCurrencyOne,
    currencyTwo,
    setCurrencyTwo,
    ratesData,
    symbolsData,
    isLoading,
    isError,
    convertedAmount,
    date,
    time,
    currencyList,
  };
};
