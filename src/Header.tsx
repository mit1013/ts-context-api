import React, { FC } from 'react';
import { useTheme, Theme } from './ThemeContext';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  const { theme } = useTheme();

  const darkTheme = theme === Theme.Dark;
  return (
    <div style={{ backgroundColor: darkTheme ? '#45103E' : '#DB93F5' }}>
      <h1 style={{ color: darkTheme ? 'white' : 'black' }}>{title}</h1>
    </div>
  );
};

export default Header;
