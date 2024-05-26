import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  value: boolean;
  children: ReactNode;
}

const DarkModeContext = createContext(false);
const DarkModeSetterContext = createContext<(darkMode: boolean) => void>(
  () => {}
);

const DarkModeProvider = ({ children, value }: Props) => {
  const [darkMode, setDarkMode] = useState(value);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <DarkModeSetterContext.Provider value={setDarkMode}>
        {children}
      </DarkModeSetterContext.Provider>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
export const useDarkMode = (): [boolean, (darkMode: boolean) => void] => [
  useContext(DarkModeContext),
  useContext(DarkModeSetterContext),
];
