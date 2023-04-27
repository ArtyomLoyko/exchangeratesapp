import { toast } from 'react-toastify'
import { useCurrency } from '../../hooks/useCurrency'
import { Text, Spinner, Box, Grid, GridItem } from '@chakra-ui/react'
import Option from './Option'
import Input from './Input'
import Display from './Display'
import TodayRates from './TodayRates'

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

  const logout = async (e) => {
    e.preventDefault()
    try {
      localStorage.removeItem('token')
      setLoggedIn(false)
      toast.success('Successfully logged out')
    } catch (err) {
      console.error(err.message)
    }
  }

  if (isError)
    return (
      <Text fontWeight='bold' fontSize='3xl' color='red' my='10'>
        Something has gone wrong
      </Text>
    )

  if (isLoading)
    return (
      <Spinner
        margin='auto 0'
        size='xl'
        thickness='4px'
        speed='0.6s'
        color='purple.500'
        emptyColor='purple.200'
      />
    )
  return (
    <Box width={{ base: '90vw', sm: '65vw' }} margin='0 auto'>
      <button onClick={(e) => logout(e)} className='btn btn-primary'>
        Logout
      </button>
      <Grid
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(2, 1fr)'
        padding={{ base: '6', sm: '10' }}
        gap='1rem'
        backgroundColor='white'
        borderRadius='lg'
      >
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf='center'
          alignSelf='center'
        >
          <Option
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyOne}
            currency={currencyOne}
          />
        </GridItem>
        <GridItem
          display={{ base: 'none', sm: 'block' }}
          colSpan={1}
          justifySelf='center'
          alignSelf='center'
        >
          {/* <RepeatIcon boxSize="2rem" color="purple.300" /> */}
        </GridItem>
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf='center'
          alignSelf='center'
        >
          <Option
            symbol={symbolsData.data}
            currencyList={currencyList}
            onCurrencyChange={setCurrencyTwo}
            currency={currencyTwo}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <Input value={amount} onAmountChange={setAmount} />
        </GridItem>
        <GridItem colSpan={3} justifySelf='right' alignSelf='right'>
          <Display
            amount={amount}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
          />
        </GridItem>
      </Grid>
      <TodayRates currencyOne={currencyOne} ratesData={ratesData.data} />
    </Box>
  )
}

export default Converter
