import TextField from '@mui/material/TextField';

const ConverterInput = ({ label, value, onAmountChange, disabled }) => {
  return (
    <TextField
      id={label}
      label={label}
      type="number"
      min={0}
      value={value}
      onChange={(e) => onAmountChange(e.target.value)}
      disabled={disabled}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default ConverterInput;
