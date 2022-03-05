import Button from './Button';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
