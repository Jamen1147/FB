import { ComponentProps, PropsWithChildren } from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({
  children,
  variant = 'contained',
  ...props
}: PropsWithChildren<ComponentProps<typeof MUIButton>>) => (
  <MUIButton variant={variant} {...props}>
    {children}
  </MUIButton>
);

export default Button;
