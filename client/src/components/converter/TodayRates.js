import { Text, Grid } from '@chakra-ui/react';

const CURRENCIES = ['EUR', 'GBP', 'CAD', 'MXN', 'JPY']

const TodayRates = ({currencyOne, ratesData}) => {
  const ratesList = CURRENCIES.includes(currencyOne) ? CURRENCIES.filter(c => c !== currencyOne).reduce((acc,c) => ({...acc, [c]: ratesData[c]}), {'USD': ratesData['USD']}) : CURRENCIES.reduce((acc,c) => ({...acc, [c]: ratesData[c]}), {})

  return (
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        padding={{ base: '6', sm: '10' }}
        gap="1rem"
        backgroundColor="white"
        borderRadius="lg"
      >
              <Text
        textAlign="center"
        marginTop="1.5rem"
        // color="whiteAlpha.600"
        fontSize="sm"
      >
        Today's rates 1 {currencyOne} = 
      </Text>
      {Object.entries(ratesList).map(([currency, rate]) => <div key={currency}>
        <p>{currency}</p>
        <p>{rate}</p>
        </div>)}
      </Grid>
  );
};

export default TodayRates;
