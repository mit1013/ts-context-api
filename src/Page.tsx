import React, { FC } from 'react';
import { useTheme, Theme } from './ThemeContext';

const Page: FC = () => {
  const { setTheme } = useTheme();

  const handleClick = (): void => {
    setTheme((prevTheme: Theme) => {
      if (prevTheme === Theme.Dark) {
        return Theme.Light;
      }
      return Theme.Dark;
    });
  };

  return (
    <div>
      Click me to toggle the theme:
      <button onClick={handleClick}>Change Theme!</button>
    </div>
  );
};

export default Page;
