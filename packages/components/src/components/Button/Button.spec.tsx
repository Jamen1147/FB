import Button from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Button>Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('invokes function on click', () => {
    const btnText = 'Button';
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{btnText}</Button>);

    userEvent.click(screen.getByText(btnText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
