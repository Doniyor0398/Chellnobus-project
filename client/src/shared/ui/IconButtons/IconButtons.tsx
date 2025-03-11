import React from 'react';
import styles from './IconButton.module.scss';
import { IconButtonProps } from '../../types/ui/iconButtonTypes';

const IconButton: React.FC<IconButtonProps> = ({
  src,
  alt,
  onClick,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      className={`${styles.icon} ${className}`}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  );
};

export default IconButton;
