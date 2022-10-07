import IAssets from "../data/models/IAssets";
import ICurrencyData from "../data/models/ICurrencyData";
import IQuote from "../data/models/IQuote";

export const defaultString = "...";
export const defaultNumber = 0;
export const defaultDate = new Date();

export const defaultCurrencyData: ICurrencyData = {
    price: defaultNumber,
    volume_24h: defaultNumber,
    market_cap: defaultNumber,
    fully_diluted_market_cap: defaultNumber
}

export const defaultQuote: IQuote = {
    AUD: defaultCurrencyData,
    EUR: defaultCurrencyData,
    GPB: defaultCurrencyData,
    USD: defaultCurrencyData,
    JPY: defaultCurrencyData,
    NZD: defaultCurrencyData,
    CAD: defaultCurrencyData
}

export const defaultCurrency: IAssets = {
    quote: defaultQuote,
    asset_id: defaultString,
    name: defaultString,
    description: defaultString,
    website: defaultString,
    ethereum_contract_address: defaultString,
    price: defaultNumber,
    volume_24h: defaultNumber,
    change_1h: defaultNumber,
    change_24h: defaultNumber,
    change_7d: defaultNumber,
    total_supply: defaultNumber,
    circulating_supply: defaultNumber,
    max_supply: defaultNumber,
    market_cap: defaultNumber,
    fully_diluted_market_cap: defaultNumber,
    status: defaultString,
    created_at: defaultDate,
    updated_at: defaultDate
}