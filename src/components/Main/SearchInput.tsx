import React from "react";
import { useSearchTerm } from "../../contexts/SearchTermProvider";

const SearchInput = () => {
  //TODO: Make distinction between the input value, which can change with each key type, and the search term which is the input value for the search engine
  // The input value should change on each key type, but the search term only after hitting 'enter' key to search for that specific term.

  const [searchTerm, setSearchTerm] = useSearchTerm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pb-20">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4 items-center">
          <label className="text-gray-700 font-bold mb-4 dark:text-white">
            What are you looking for?
          </label>
          <div className="transition flex w-fit h-fit items-center rounded-full">
            <input
              value={searchTerm}
              onChange={handleInputChange}
              className=" transition border rounded-l-full px-8 py-4 w-96 text-gray-700 text-bold leading-tight outline-none"
              placeholder="I am looking for..."
              type="text"
            />
            <button className="transition rounded-r-full px-8 py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
