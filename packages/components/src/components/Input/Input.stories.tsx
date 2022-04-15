import Input from './Input';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<React.ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

const args = {
  placeholder: 'Input',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...args,
  variant: 'outlined',
  onChange: () => console.log('changing'),
};

export const Filled = Template.bind({});
Filled.args = {
  ...args,
  variant: 'filled',
};
