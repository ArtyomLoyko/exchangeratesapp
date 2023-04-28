import { useCallback } from 'react';
import { toast } from 'react-toastify'
import { useCurrency } from '../../hooks/useCurrency'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

import Option from './Option'
import Input from './Input'
import TodayRates from './TodayRates'
import Rate from './Rate'

const Converter = ({ setLoggedIn }) => {
  const {
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
  } = useCurrency()

  const logOut = useCallback(async (e) => {
    e.preventDefault()
    try {
      localStorage.removeItem('token')
      setLoggedIn(false)
      toast.success('Successfully logged out')
    } catch (err) {
      console.error(err.message)
    }
  }, [setLoggedIn])

  if (isError)
    return (
      <Typography fontSize={18} fontWeight='bold'>
        Something has gone wrong
      </Typography>
    )

  if (isLoading)
    return (
      <CircularProgress />
    )

  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Container sx={{position: 'relative'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card
              sx={{ height: '100%' }}
            >
              <CardHeader
                title={'Currency converter'}
                titleTypographyProps={{ color: 'white', fontSize: 18 }}
                sx={{ backgroundColor: 'rgb(25, 118, 210)' }}
              >
              </CardHeader>
              <CardContent>
                <Grid container spacing={5} sx={{padding: '20px 70px'}}>
                  <Grid item xs={6} md={3}>
                    <Input label='From' value={amount} onAmountChange={setAmount} />
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <Option
                      symbol={symbolsData.data}
                      currencyList={currencyList}
                      onCurrencyChange={setCurrencyOne}
                      currency={currencyOne}
                    />
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Input label='To' value={convertedAmount} disabled />
                  </Grid>
                  <Grid item xs={6} md={9}>
                    <Option
                      symbol={symbolsData.data}
                      currencyList={currencyList}
                      onCurrencyChange={setCurrencyTwo}
                      currency={currencyTwo}
                    />
                  </Grid>
                </Grid>
                <Rate currencyOne={currencyOne} currencyTwo={currencyTwo} ratesData={ratesData.data} date={date} time={time} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <TodayRates currencyOne={currencyOne} ratesData={ratesData.data} />
          </Grid>
        </Grid>
        <Button sx={{position: 'absolute', top: '-40px', right: '30px'}} variant="text" onClick={logOut}>Log Out</Button>
      </Container>
    </Box>
  )
}

export default Converter
