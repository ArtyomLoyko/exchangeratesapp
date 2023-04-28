import { Box, Text } from '@chakra-ui/react';

const ConverterDisplay = ({
  amount,
  currencyOne,
  currencyTwo,
  convertedAmount,
  date,
  time,
}) => {
  return (
    <Box textAlign="right">
      <Text>Your rate:</Text>
      <Text fontSize="lg" fontWeight="bold">
        {amount} {currencyOne} = {convertedAmount} {currencyTwo}
      </Text>
      <Text fontSize="xs" color="gray.500">
        Last updated {date} {time}
      </Text>
    </Box>
  );
};

export default ConverterDisplay;
