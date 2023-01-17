"use client";

import { useState } from "react";
import Country from "./Country";
import RegionFilter from "./RegionFilter";
import CountrySearch from "./CountrySearch";

function Wrapper({ data }) {
  const [countries, setCountries] = useState(data);

  const handleCountrySearch = (inputValue) => {
    setCountries(
      data.filter((country) =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  const handleRegionFilter = (region) => {
    if (region === "All") {
      setCountries(data);
    } else {
      setCountries(data.filter((country) => country.region === region));
    }
  };

  return (
    <div className="w-full">
      <section className="w-full flex flex-col gap-5 my-6 md:flex-row md:justify-between">
        <CountrySearch onCountryFilter={handleCountrySearch} />
        <RegionFilter onRegionFilter={handleRegionFilter} />
      </section>
      <section className="my-4 flex flex-col items-center gap-6 md:grid md:place-items-center md:grid-cols-2 lg:grid-cols-3 xl:gap-12 2xl:gap-x-24 2xl:gap-y-16 xl:grid-cols-4">
        {countries.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </section>
    </div>
  );
}

export default Wrapper;
