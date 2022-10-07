import React, { useEffect, useState } from "react";
import IAssets from "../data/models/IAssets";
import { formatDate } from "../date/formatter";
import { useHistory } from "react-router-dom";
import {ReactComponent  as UpIconPriceChange} from '../images/upPriceChange.svg';
import {ReactComponent  as DownIconPriceChange} from '../images/downPriceChange.svg';

interface IProps {
    currencies: IAssets[];
}

export const Card = (props: IProps) => {

    const currencies = props.currencies;
    const history = useHistory();

    const visualCurrencies = currencies.map((asset, index) => {
        return (
            <div key={index} className="card-currency" onClick={() => history.push(`/currencyInfo/${asset.asset_id}`)}>
                <div className="items-body">
                    <div className="name">
                        <div className="name-asset">
                            {asset.asset_id}
                        </div>
                        
                        <div className="name-currency">
                            {asset.name}
                        </div>
                    </div>

                    <div className="price">
                        {asset.price.toFixed(6)} <small>USD</small>
                        {asset.change_24h > 0 ? <UpIconPriceChange/> : <DownIconPriceChange/>}
                    </div>
                </div>
            </div> 
        )        
    });

    return(
        <div className="centered-one-element">
            <div className="container-card">
                {visualCurrencies}     
            </div>
        </div>
        
    );

}