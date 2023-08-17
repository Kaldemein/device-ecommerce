import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      <h5 className="p-2 mt-5">Производитель</h5>
      {device.brands.map((brand) => (
        <ListGroup.Item
          style={({ cursor: 'pointer' }, { borderRadius: 0 })}
          onClick={() => device.setSelectedBrand(brand)}
          active={brand.id === device.selectedBrand.id}
          key={brand.id}
          className="p-2 me-3">
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default BrandBar;
