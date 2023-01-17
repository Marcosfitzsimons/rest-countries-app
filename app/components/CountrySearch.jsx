"use client";

import { useState } from "react";
import { MdSearch } from "react-icons/md";

const CountrySearch = ({ onCountryFilter }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="relative flex items-center shadow-lg rounded-md">
      <MdSearch className="absolute left-[17px] text-2xl" />
      <input
        type="search"
        className="pl-14 p-3 rounded-md w-full placeholder:text-black bg-light-orange-500 dark:bg-dark-gray-500 dark:placeholder:text-white md:w-96 lg:w-[32rem]"
        value={inputValue}
        placeholder="Search for a country..."
        onChange={(e) => {
          setInputValue(e.target.value);
          onCountryFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default CountrySearch;
