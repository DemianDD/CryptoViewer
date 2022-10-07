import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { getCurrencies } from './data/api/Currency.api';
import IAssets from './data/models/IAssets';
import { About } from './pages/About';
import { Converter } from './pages/Converter';
import { CurrencyInfo } from './pages/CurrencyInfo';
import { Home } from './pages/Home';


export default function App(){ 
    const [currencies, setCurrencies] = React.useState<IAssets[]>([]);
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        getCurrencies().then(answer => { 
            const curr = answer.assets.filter(c => c.name && c.name.length > 0);
            setCurrencies(curr);
        }).finally(()=> {
            setLoading(false);
        });
    }, []);
    
    return (
        <BrowserRouter>
            <Navbar/>
            <div className='centered page-name'>
                <Switch>
                    <Route path={ '/home' } exact component={() => <Home isLoading={isLoading} currencies={currencies} />} />
                    <Route path={ '/converter' } component={() => <Converter isLoading={isLoading} currencies={currencies} />} />
                    <Route path={ '/currencyInfo/:id' } exact component={() => <CurrencyInfo isLoading={isLoading} currencies={currencies} />} />
                    <Route path={ '/about' } component={() => <About/>} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
