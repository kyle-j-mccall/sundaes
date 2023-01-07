import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import OrderEntry from '../OrderEntry';
import Options from '../Options';
import { OrderDetailsProvider } from '../../../../context/orderdetails';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });

  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  await UserEvent.clear(vanillaInput);
  await UserEvent.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  await UserEvent.clear(chocolateInput);
  await UserEvent.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});
