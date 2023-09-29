import React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({ label = 'Search Quiz', value, onChange }) {
  return (
    <TextField
      label={label}
      sx={{
        fontFamily: 'Ringbearer, sans-serif',
        '& .MuiInputLabel-root': {
          fontFamily: 'Ringbearer, sans-serif',
        },
      }}
      InputLabelProps={{
        sx: {
          color: '#003566',
          textTransform: 'capitalize',
        },
      }}
      inputProps={{
        style: {
          fontFamily: 'Ringbearer, sans-serif',
        },
        value,
        onChange,
      }}
    />
  );
}
