import React from 'react';
import { IconProps } from './types';
import sprite from '../../assets/svg/sprite.svg';

const Icon: React.FC<IconProps> = ({
  id,
  width = 'w-4',
  height = 'w-4',
  color = 'fill-transparent',
  strokeColor = 'stroke-black',
}) => {
  return (
    <svg className={`inline-block align-middle ${width} ${height} ${color} ${strokeColor}`}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
