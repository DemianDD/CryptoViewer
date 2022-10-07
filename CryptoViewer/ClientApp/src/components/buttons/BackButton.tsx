import React from "react";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
    let history = useHistory();
    return (
        <>
          <button className="ButtonStyle" onClick={() => history.goBack()}></button>
        </>
    );
};