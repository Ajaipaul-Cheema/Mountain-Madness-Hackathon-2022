import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import Watchlist from './pages/Watchlist';
import Portfolio from './pages/Portfolio';

const App = () => {

    return (
        <BrowserRouter basename={"/"} >
            <Routes>
                <Route path={"/"} element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path={"info/:id"} element={<Info />} />
                    <Route path={"watchlist"} element={<Watchlist />} />
                    <Route path={"portfolio"} element={<Portfolio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}


createRoot(document.getElementById('root')).render(<App />);
export default App;