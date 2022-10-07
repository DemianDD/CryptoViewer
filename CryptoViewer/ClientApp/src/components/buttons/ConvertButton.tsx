import React, { useState } from "react";

interface IProps { 
  onSubmit: () => void; 
}

export const ConvertButton = (props: IProps) => {
  

    return (
        <div>
          <button 
            type="submit"
            className="convertButton"
            onClick={props.onSubmit}
       >
            Convert
          </button>
        </div>
    );
}