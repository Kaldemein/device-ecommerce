import React from 'react';
import { Context } from '../index';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
  const { device } = React.useContext(Context);

  return (
    <div className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};

export default DeviceList;
