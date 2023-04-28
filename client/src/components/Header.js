import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography component="h1" variant="h3" textAlign={'center'}>
        Currency Converter & Exchange Rates App
      </Typography>
    </Box>
  );
};

export default Header;
