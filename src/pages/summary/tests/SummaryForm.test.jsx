import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('checkbox enables/disables button', () => {
  // const user = userEvent.setup();
  render(<SummaryForm />);
  const agreeButton = screen.getByRole('button', { name: 'Agree' });

  expect(agreeButton).toBeDisabled();

  const termsCheckbox = screen.getByRole('checkbox', {
    name: 'I agree to the terms and conditions',
  });

  expect(termsCheckbox).not.toBeChecked();

  fireEvent.click(termsCheckbox);

  expect(agreeButton).not.toBeDisabled();
});
