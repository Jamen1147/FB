import { styled, TextField } from '@mui/material';
import React from 'react';

const MUIInput = styled(TextField)`
  input {
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

const Input = (props: React.ComponentProps<typeof TextField>) => (
  <MUIInput {...props} />
);

export default Input;
