import React from "react";
import '../App.css';

const Search = (props) => {
  const { search, setSearch, searchHandler } = props;
  return (
    <div className="search align-middle justify-center pl-19 flex gap-4 mt-28">
      <input  type="text" placeholder="Enter city name" name="search" value={search} className="city-name w-5/12 h-10  rounded-md p-1" onChange={(event)=> setSearch(event.target.value)} />
      <button className="font-bold  text-lg" onClick={searchHandler}>Search</button>
    </div>

  );
};

export default Search;
