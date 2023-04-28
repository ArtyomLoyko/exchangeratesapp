import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const CURRENCIES = ['EUR', 'GBP', 'CAD', 'MXN', 'JPY']

const TodayRates = ({currencyOne, ratesData}) => {
  const ratesList = CURRENCIES.includes(currencyOne) ? CURRENCIES.filter(c => c !== currencyOne).reduce((acc,c) => ({...acc, [c]: ratesData[c]}), {'USD': ratesData['USD']}) : CURRENCIES.reduce((acc,c) => ({ ...acc, [c]: Math.round(ratesData[c] * 10000) / 10000 }), {})

  const title = (
    <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between'}}>
      <Typography>Today's rates</Typography>
      <Typography>1 {currencyOne} =</Typography>
    </div>
  )

  return (
      <Card
        sx={{ height: '100%' }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{ color: 'white', fontSize: 18 }}
          sx={{ backgroundColor: 'rgb(25, 118, 210)' }}
        >
        </CardHeader>
        <CardContent>
          <div>
            {Object.entries(ratesList).map(([currency, rate]) => 
              <div key={currency}>
                <Divider />
                <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', fontSize: 18, padding: '10px'}}>
                  <Typography>{currency}</Typography>
                  <Typography>{rate}</Typography>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
  );
};

export default TodayRates;
