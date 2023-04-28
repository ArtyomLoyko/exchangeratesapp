// import { useFlags } from '../../hooks/useFlags';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const ConverterOption = ({
  symbol,
  currencyList,
  onCurrencyChange,
  currency,
}) => {
  // const { flagUrl } = useFlags(currency);
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      defaultValue={currency}
      onChange={(e) => onCurrencyChange(e.target.value)}
      style={{ width: '100%' }} 
    >
      {currencyList.map((currency) => (
        <MenuItem key={currency} value={currency}>{currency} - {symbol[currency].name}</MenuItem>
      ))}
    </Select>
  );
};

export default ConverterOption;
