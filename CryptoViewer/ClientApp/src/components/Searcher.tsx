import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import IAssets from "../data/models/IAssets";
import searchLogo from '../images/searchicon.png';

interface IProps {
  sort: (querry: string) => void;
}

export const Searcher = (props: IProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    props.sort(event.target.value);
  };

  return(
    <form role="search">
      <input 
        className="searcher" 
        type="search" 
        aria-label="Search"
        onChange={handleSearch}
        placeholder = "Search..."
      />
    </form>
  );
}

