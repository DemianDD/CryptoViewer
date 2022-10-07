import React, { ChangeEvent, ChangeEventHandler, SyntheticEvent, useEffect, useState } from "react";
import { getCurrencies } from "../data/api/Currency.api";
import IAssets from "../data/models/IAssets";
import { defaultCurrency } from "../defaults/Defaults";
import { Loading } from "./loading/Loading";
import "../styles/Converter.css"
import { Searcher } from "./Searcher";

export interface IListBoxItem {
    value: any;
    label: string;
}

interface IProps {
    onSelect(data: any): void;
    data: IListBoxItem[];
}

export const ListBox = (props: IProps) => {
    const options = props.data.map((element, index) => {
        return (
            <option key={index} value={index}>{element.label}</option>
        );
    });

    const onChange = (event: SyntheticEvent<HTMLSelectElement, Event>) => {
        props.onSelect(props.data[Number(event.currentTarget.value)].value);
    }

    return(
        <div>
            <select className="listboxStyle" onChange={onChange}>
                <option value="" disabled selected>Choose me</option>
                {options}
            </select>
        </div>
    );
}