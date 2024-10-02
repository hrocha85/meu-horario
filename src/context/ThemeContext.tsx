import React, {createContext, useState, useContext, ReactNode} from 'react';
import {customLightTheme, customDarkTheme} from '../theme/index';

interface ThemeContextType {
  isDarkTheme: boolean;
  colors: any;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const colors = isDarkTheme ? customDarkTheme.colors : customLightTheme.colors;

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{isDarkTheme, colors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
