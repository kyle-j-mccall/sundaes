import { Container } from 'react-bootstrap';
import OrderEntry from '../src/pages/summary/entry/OrderEntry';
import { OrderDetailsProvider } from '../src/context/orderdetails';

function App() {
  return (
    <div className="App">
      <Container>
        <OrderDetailsProvider>
          <OrderEntry />
        </OrderDetailsProvider>
      </Container>
    </div>
  );
}

export default App;
