import Input from './Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Input />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Input label="label" placeholder="input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onChange when type', () => {
    const onChange = jest.fn();
    render(<Input label="label" placeholder="input" onChange={onChange} />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'something');
    expect(onChange).toHaveBeenCalled();
  });
});
