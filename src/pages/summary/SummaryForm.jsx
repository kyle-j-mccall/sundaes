import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SummaryForm() {
  const [termsChecked, setTermsChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to the <span style={{ color: 'blue' }}> terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsChecked}
          onChange={(e) => setTermsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!termsChecked}>
        Agree
      </Button>
    </Form>
  );
}
