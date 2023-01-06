import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import { Row } from 'react-bootstrap';
import ToppingOption from './ToppingOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  //optionType is scoops or toppings
  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then((response) => setItems(response.data));
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ));

  return <Row>{optionItems}</Row>;
}
