import { Suspense, lazy } from 'react';
import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopBar';
import BreadCrumbs from '../components/BreadCrumbs';

const HomePage = lazy(() => import('../pages/HomePage'));
const AddProduct = lazy(() => import('../pages/AddProduct'));
const ProductData = lazy(() => import('../pages/ProductData'));

const Routes = () => {
  return (
    <React.Fragment>
      <div className="flex h-screen">
        <SideNavBar />
        <div className="flex flex-col flex-grow">
          <TopNavBar />
          <BreadCrumbs/>
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/product-data" element={<ProductData />} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Routes;
