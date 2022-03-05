import { ComponentProps, PropsWithChildren } from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof MUIButton>>) => (
  <MUIButton {...props}>{children}</MUIButton>
);

export default Button;
