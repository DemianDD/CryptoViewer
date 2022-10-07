import React from "react";

import './Loading.css';

export default function Spinner(){ 
    return (
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    );
}