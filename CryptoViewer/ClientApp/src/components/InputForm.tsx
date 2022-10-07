import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, SyntheticEvent, useState } from "react";
import IAssets from "../data/models/IAssets";

interface IProps { 
  onInput: (arg0: number) => void; 
}

export const InputForm = (props: IProps) => {
  const [value, setValue] = useState("");

  const validateInputAsNumber = (event: FormEvent<HTMLInputElement>) => {
    if (!(/^\d*\.?\d*$/.test(event.currentTarget.value))) {
      return;
    }

    setValue(event.currentTarget.value);
    props.onInput(Number(event.currentTarget.value));
  }

  return(
    <div>
      <input 
        className="inputForm" 
        placeholder="Enter any number.. " 
        onChange={validateInputAsNumber}
        value={value}
      />
    </div>
  );
}