import React, { ChangeEvent} from "react";

interface IProps {
  sortOnClick: () => void;
}
export const SortButton = (props: IProps) => {

  const onSort = () => {
    props.sortOnClick()
  };

  return (
    <>
      <button className="searcherIconStyle"
        onClick={onSort}>
        Sort
      </button>
    </>
  );
};