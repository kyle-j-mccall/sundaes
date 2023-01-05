import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('checkbox enables/disables button', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const agreeButton = screen.getByRole('button', { name: 'Agree' });
  expect(agreeButton).toBeDisabled();
  const termsCheckbox = screen.getByRole('checkbox', {
    name: 'I agree to the terms and conditions',
  });
  expect(termsCheckbox).not.toBeChecked();

  //user clicks checkbox
  await user.click(termsCheckbox);
  expect(termsCheckbox).toBeChecked();
  expect(agreeButton).toBeEnabled();

  //user unchecks box
  await user.click(termsCheckbox);
  expect(termsCheckbox).not.toBeChecked();
  expect(agreeButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  //popver starts hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);

  expect(nullPopover).not.toBeInTheDocument();
  // popover appears on mouseover of checkbox
  const termsAndConditions = screen.getByText(/terms and conditions/i);

  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  //popover dissapears when we mouse out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
