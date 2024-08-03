// src/routing/Routes.js
import React, { lazy } from 'react';
import FullLayout from '../layouts/FullLayout';

// Lazy loading components
// const Home = lazy(() => import('../components/Home'));
// const Products = lazy(() => import('../components/Products'));
// const ProductInspect = lazy(() => import('../components/ProductInspect'));
// const Categories = lazy(() => import('../components/Categories'));
// const BestSellers = lazy(() => import('../components/BestSellers'));
// const Contact = lazy(() => import('../components/Contact'));
const LandingPage = lazy(() => import('../views/LandingPage'));

const Routes = [
  {
    path: '/',
    component: LandingPage,
    layout: FullLayout,
  },
//   {
//     path: '/products',
//     component: Products,
//     layout: FullLayout,
//   },
//   {
//     path: '/product/:id',
//     component: ProductInspect,
//     layout: FullLayout,
//   },
//   {
//     path: '/categories',
//     component: Categories,
//     layout: FullLayout,
//   },
//   {
//     path: '/best-sellers',
//     component: BestSellers,
//     layout: FullLayout,
//   },
//   {
//     path: '/contact',
//     component: Contact,
//     layout: FullLayout,
//   },
];

// export default Routes;
