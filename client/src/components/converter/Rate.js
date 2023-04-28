import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const Rate = ({currencyOne, currencyTwo, ratesData,date,time}) => {
  return (
    <div>
      <Divider />
      <Typography component="p" fontSize={14} marginTop={2}>Your rate:</Typography>
      <Typography component="p" fontSize={18}>1 {currencyOne} = {Math.round(ratesData[currencyTwo] * 10000) / 10000} {currencyTwo}</Typography>
      <Typography component="p" fontSize={10}>Last updated {date} {time}</Typography>
    </div>
  );
};

export default Rate;
