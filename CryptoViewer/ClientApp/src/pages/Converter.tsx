import React, {Fragment, ReactEventHandler, SyntheticEvent, useEffect, useState} from "react";
import "../styles/Converter.css";
import IAssets from "../data/models/IAssets";
import { defaultCurrency } from "../defaults/Defaults";
import { Loading } from "../components/loading/Loading";
import { IListBoxItem, ListBox } from "../components/ListBox";
import { InputForm } from "../components/InputForm";
import { ConvertButton } from "../components/buttons/ConvertButton";

interface IProps {
    currencies: IAssets[];
    isLoading: boolean;
}

export const Converter = (props: IProps) => {
    const [options, setOptions] = useState<IListBoxItem[]>([]);
    const [selectedCurrencyFrom, selectCurrencyFrom] = useState<IAssets>(defaultCurrency);
    const [selectedCurrencyTo, selectCurrencyTo] = useState<IAssets>(defaultCurrency);
    const [ammount, setAmmount] = useState(0);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const curr = props.currencies;
        selectCurrencyFrom(curr[0] ?? defaultCurrency);
        selectCurrencyTo(curr[0] ?? defaultCurrency);
        setOptions(curr.map(c => {
            return {
                label: c.name,
                value: c
            };
        }));
    }, [props.currencies]);

    const onSelectCurrencyFrom = (currency: IAssets) => {
        selectCurrencyFrom(currency);
    }
    const onSelectCurrencyTo = (currency: IAssets) => {
        selectCurrencyTo(currency);
    }

    const getAmmount = () => {
        setAmmount(selectedCurrencyFrom.price * number / selectedCurrencyTo.price);
    }

    const getNumber = (value: number) => {
        setNumber(value)
    }

    return (
        <Loading isLoading={props.isLoading}>
                <div className="ConverterPanel">
                    <div className="centered">
                            <InputForm  
                                onInput={getNumber}/>
                        <div className="listboxPosition">
                            <ListBox 
                                data={options}
                                onSelect={onSelectCurrencyFrom}
                            />
                            <ListBox
                                data={options}
                                onSelect={onSelectCurrencyTo}
                            />
                        </div>
                            <ConvertButton onSubmit = {getAmmount}/>
                            <div className="hrLine"/>
                            <div className="resultPanel">
                                <small>Your Result:</small> {ammount} <small>{selectedCurrencyTo.asset_id}</small>
                            </div>
                    </div>
                </div>
        </Loading>

    

)
}