import React, {Fragment, useEffect, useState} from "react";
import {BrowserRouter as Router,useParams} from "react-router-dom";
import { Loading } from "../components/loading/Loading";
import IAssets from "../data/models/IAssets";
import { formatDate } from "../date/formatter";
import { defaultCurrency } from "../defaults/Defaults";
import {ReactComponent  as UpIconPriceChange} from '../images/upPriceChange.svg';
import {ReactComponent  as DownIconPriceChange} from '../images/downPriceChange.svg';

import "../styles/CurrencyInfo.css"
  

interface IProps {
    currencies: IAssets[];
    isLoading: boolean;
}

export const CurrencyInfo = (props: IProps) => {
    let {id}  = useParams<any>();

    const [currencies, setCurrencies] = useState<IAssets>(defaultCurrency);

    useEffect(() => {
            const curr = props.currencies.find(Element => Element.asset_id === id );
            setCurrencies(curr??defaultCurrency);
    }, [props.currencies]);

        return (
            <Loading isLoading={props.isLoading}>
        <div>
            <div className="centered">

                <div className="CurName">
                    {currencies!.name}
                </div>

                     <div className="CurrencyInfoPanel">

                            <div className="CurDescriptions">
                                {currencies!.description} 
                            </div>

                        <div className="CurInfoPosition">

                            <div className="CurInfoBlock">
                                <div className="CurInfoText">
                                    <div>
                                        <small>
                                            Change in 1 hour: {currencies!.change_1h > 0 ? <UpIconPriceChange/> : <DownIconPriceChange/>}
                                        </small>
                                    </div>
                                    {currencies!.change_1h}
                                    <small> %</small>
                                </div>
                            </div>

                            <div className="CurInfoBlock">
                                <div className="CurInfoText">
                                    <div>
                                        <small>
                                            Change in 24 hours: {currencies!.change_24h > 0 ? <UpIconPriceChange/> : <DownIconPriceChange/>} 
                                        </small>
                                    </div>
                                    {currencies!.change_24h}
                                    <small> %</small>
                                </div>
                            </div>

                            <div className="CurInfoBlock">
                                <div className="CurInfoText">
                                    <div>
                                        <small>
                                            Change in 7 days: {currencies!.change_7d > 0 ? <UpIconPriceChange/> : <DownIconPriceChange/>}
                                        </small>
                                    </div>
                                    {currencies!.change_7d}
                                    <small> %</small>
                                </div>
                            </div>

                            <div className="CurInfoBlock">
                                <div className="CurInfoText">
                                    <div><small>Volume in 24 hours: </small></div>
                                    {currencies!.volume_24h} 
                                    <small> USD</small>
                                </div>
                            </div>

                            <div className="CurInfoBlock bgPrice">
                                <div className="CurInfoText">
                                    <div><small>Price:</small></div>
                                    {currencies!.price}
                                    <small> USD</small>
                                </div>
                            </div>

                            <div className="CurInfoBlock">
                                <div className="CurInfoText">
                                    <div><small>Market Capitalization: </small></div>
                                    {currencies!.market_cap} 
                                    <small> USD</small>
                                </div>
                            </div>         
                        </div>     
                </div>
            </div>               
            <h6 className="textAlignUpdateAt">Updated at: {formatDate(currencies!.updated_at)} </h6>
        </div>
            </Loading>
        );
}