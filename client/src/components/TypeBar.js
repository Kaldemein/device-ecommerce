import ListGroup from 'react-bootstrap/ListGroup';

import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          className="me-3"
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}>
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
