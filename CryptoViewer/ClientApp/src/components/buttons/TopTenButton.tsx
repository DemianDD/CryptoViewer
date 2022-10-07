import React from "react";

interface IProps {
  topTenOnClick: () => void;
}

export const TopTenButton = (props: IProps) => {

  const TopTenSort = () => {
    props.topTenOnClick()
  };
  
    return (
        <>
          <button className="searcherIconStyle" 
          onClick={TopTenSort}>
            Top 10
            </button>
        </>
    );
};