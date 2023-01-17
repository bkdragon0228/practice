import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from 'react';
import { Theme, lightTheme, darkTheme } from '../styles/theme';

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

export default function ThemeContextProvider(props: PropsWithChildren) {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') === 'lightTheme'
      ? lightTheme
      : darkTheme
  );

  const toggleTheme = () => {
    const currentTheme = window.localStorage.getItem('theme');
    setTheme(currentTheme === 'lightTheme' ? darkTheme : lightTheme);
  };

  useEffect(() => {
    if (theme !== null) {
      window.localStorage.setItem('theme', 'lightTheme');
    }

    if (theme === lightTheme) {
      window.localStorage.setItem('theme', 'lightTheme');
    }

    if (theme === darkTheme) {
      window.localStorage.setItem('theme', 'darkTheme');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
