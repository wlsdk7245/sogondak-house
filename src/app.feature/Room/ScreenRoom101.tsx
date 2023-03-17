import React from 'react';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom101 = () => {
  const roomInfo101 = ObjectRoom['101'];

  return <RoomInfoBox {...roomInfo101} />;
};

export default ScreenRoom101;
