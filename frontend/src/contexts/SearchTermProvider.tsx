import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const SearchTermContext = createContext("");
const SearchTermSetterContext = createContext<(searchTerm: string) => void>(
  () => {}
);

const SearchTermProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchTermContext.Provider value={searchTerm}>
      <SearchTermSetterContext.Provider value={setSearchTerm}>
        {children}
      </SearchTermSetterContext.Provider>
    </SearchTermContext.Provider>
  );
};

export default SearchTermProvider;
export const useSearchTerm = (): [string, (searchTern: string) => void] => [
  useContext(SearchTermContext),
  useContext(SearchTermSetterContext),
];
