import React from 'react';
import { Context } from '../index';
import DeviceItem from './DeviceItem';
import { observer } from 'mobx-react-lite';

const DeviceList = observer(() => {
  const { device } = React.useContext(Context);
  const [types, setTypes] = React.useState([]);

  return (
    <div className="d-flex justify-content-between mt-3">
      {device.devices.map((item) => (
        <DeviceItem key={item.id} item={item} />
      ))}
    </div>
  );
});

export default DeviceList;
