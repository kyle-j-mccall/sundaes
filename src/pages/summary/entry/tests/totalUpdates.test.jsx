import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event/dist/types/setup';

import Options from '../Options';

test('update scoop subtotal when scoops change', async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  //make sure total starts at $0.00
  const scoopSubTotal = screen.getByText('Scoops total: $', { exact: false });

  expect(scoopSubTotal).toHaveTextContent('0.00');

  //update vanilla scoops to 1 and check subtotal
  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, '1');
  expect(scoopSubTotal).toHaveTextContent('2.00');

  //update chocolate scoops to 2 and check subtotal again
  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });

  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');

  expect(scoopSubTotal).toHaveTextContent('6.00');
});
