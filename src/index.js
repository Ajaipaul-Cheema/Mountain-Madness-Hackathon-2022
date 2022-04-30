import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Info from './pages/Info';
import Watchlist from './pages/Watchlist';
import Portfolio from './pages/Portfolio';

export default function App() {

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


ReactDOM.render(<App />, document.getElementById("root"));