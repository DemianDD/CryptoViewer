import React, {Fragment, useEffect, useState} from "react";
import { ShowAllButton } from "../components/buttons/ShowAllButton";
import { SortButton } from "../components/buttons/SortButton";
import { Card } from "../components/Card";
import { Loading } from "../components/loading/Loading";
import { Searcher } from "../components/Searcher";
import IAssets from "../data/models/IAssets";
import "../styles/Banner.css";
import {ReactComponent as BannerPhone} from '../images/bannerPhone.svg';

interface IProps {
    currencies: IAssets[];
    isLoading: boolean;
}

export const Home = (props: IProps) => {
    const [currencies, setCurrencies] = useState<IAssets[]>([]);
    const [sortedCurrencies, setSortedCurrencies] = useState<IAssets[]>([]);
    const [topCurrencies, setTopCurrencies] = useState<IAssets[]>([]);
    const [isAscendingSort, setAscendingSort] = useState<boolean>(false);
    const [showAll, setShowAll] = useState<boolean>(false);

    useEffect(() => {
        const curr = [...props.currencies].sort((a, b) => b.market_cap - a.market_cap);
        setTopCurrencies(curr.splice(0, 10));
        setCurrencies(curr);
        setSortedCurrencies(curr);
    }, [props.currencies]);

    const search = (sortQuerry: string) => {
        setSortedCurrencies(currencies.filter((asset) => {
            return asset.name.toLowerCase().indexOf(sortQuerry.toLowerCase()) !== -1;
        }));
    };

    const sortOnClick = () => {
        setSortedCurrencies([...sortedCurrencies].sort((a, b) => {
            if (isAscendingSort) return b.price - a.price;
            return a.price - b.price;
        }));
        setAscendingSort(!isAscendingSort);
    }

    /*const topTenOnClick = () => {
        setSortedCurrencies([...currencies].sort((a, b) => b.market_cap - a.market_cap).take(10));
    }*/

    const showAllCurrenciesClick = () => {
        setShowAll(!showAll);
    }

    return (
        <div>
            <Loading isLoading={props.isLoading}>
            <div className="centered">
                <p className="CryptoViewerLabel">CryptoViewer</p>
            
                <div className="searcherIconPosition">
                    <Searcher sort={search}/>
                    <SortButton sortOnClick={sortOnClick}/>
                    {/*<TopTenButton topTenOnClick={topTenOnClick}/>*/}
                </div>            
                    <Card currencies={topCurrencies}/>
                    <div><ShowAllButton ShowAllOnClick={showAllCurrenciesClick}/></div>
                    {showAll ? 
                        <>
                            <Card currencies={sortedCurrencies} />
                        </> : <></> }

                <div className="bannerHeaderText">IN CRYPTO WE TRUST</div>
            </div>



            <div className="bannerTvoi">
                <div className="bannerImage"> <BannerPhone/> </div>
                <div className="bannerPosition">
                    <br/>
                    <br/>

                    <p><div className="bannerSecondText">Choose your favorite</div></p>

                    <p><div className="bannerSmallText">easy transactions with TVOI </div></p>
                </div>    
            </div>
            </Loading>
        </div>
    )
}