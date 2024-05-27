import React, { ReactNode } from "react";
import DarkModeProvider from "./DarkModeProvider";
import SearchTermProvider from "./SearchTermProvider";

interface Props {
  children: ReactNode;
}

const ContextProviders = ({ children }: Props) => {
  return (
    <DarkModeProvider value={false}>
      <SearchTermProvider>{children}</SearchTermProvider>
    </DarkModeProvider>
  );
};

export default ContextProviders;
