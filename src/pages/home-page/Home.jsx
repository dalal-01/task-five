import React, { useEffect, useState } from "react";
import "./home.css";
import AppInput from "../../components/app-input/AppInput.jsx";
import { IoSearchSharp } from "react-icons/io5";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import FavoriteCountries from "./favorite-countries-section/FavoriteCountries.jsx";
import CountriesList from "./countries-list/CountriesList.jsx";

function Home() {
  const storedSelectedRegion = localStorage.getItem('selectedRegion') || "No Filter";

  const [countryName, setCountryName] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(storedSelectedRegion);


  const options = [
    "No Filter",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Favorites",
  ];
  
  // useEffect(() => {
  //   localStorage.setItem("countryName", countryName);
  // }, [countryName]);

  useEffect(() => {
    localStorage.setItem("selectedRegion", selectedRegion);
  }, [selectedRegion]);

  return (
    <>
      <section className="filter-section px-4 px-md-5 py-4 py-md-5 d-flex justify-content-between flex-wrap gap-5">
        <div className="filter-by-search rounded ">
          <AppInput
            type={"search"}
            placeholder="Search for a country..."
            icon={<IoSearchSharp className="ms-4" />}
            value={countryName}
            setValue={setCountryName}
          />
        </div>
        <div className="dropdown filter-by-list py-3 rounded">
          <Dropdown
            values={options}
            selectedValue={selectedRegion}
            setValue={setSelectedRegion}
          />
        </div>
      </section>
      <main className="px-5">
        <div className="row">
          <FavoriteCountries />
          <CountriesList
            selectedRegion={selectedRegion}
            countryName={countryName}
          />
        </div>
      </main>
    </>
  );
}

export default Home;
