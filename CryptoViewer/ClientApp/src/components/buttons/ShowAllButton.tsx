import React from "react";

interface IProps {
  ShowAllOnClick: () => void;
}

export const ShowAllButton = (props: IProps) => {

  const ShowAllCurrencies = () => {
    props.ShowAllOnClick()
  };
  
    return (
        <>
          <button className="showAllButton" 
          onClick={ShowAllCurrencies}>
            </button>
        </>
    );
};