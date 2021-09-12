import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home_page/index';
import Love from './pages/love_page/index';
import Category from './pages/category_page/index';
import Settings from './pages/setting_page/index';
import Revenue from './pages/revenue_page/index';
import AddRevenue from './pages/add_revenue_page/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Love} path="/love" />
            <Route component={Category} path="/category" />
            <Route component={Settings} path="/settings" />
            <Route component={Revenue} path="/revenue/:id" />
            <Route component={AddRevenue} path="/add-revenue" />
        </BrowserRouter>
    );
}

export default Routes;
