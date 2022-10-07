import ICurResponce from "../models/ICurResponce";
import { get } from "./Axios";

export function getCurrencies() {
    return get<ICurResponce>("https://localhost:44313/Crypto");
}