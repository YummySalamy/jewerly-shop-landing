import React from "react";
import FullLayout from "../layouts/FullLayout";
import TwoColumnsHero from "../components/hero/TwoColumnsHero";
import TestimonialsSlide from "../components/testimonials/TestimonialsSlide";
import Categories from "../components/products/Categories";
import BestSellers from "../components/products/BestSellers";

const LandingPage = () => {
    return (
        <FullLayout>
            <TwoColumnsHero />
            <TestimonialsSlide />
            <Categories />
            <BestSellers />
        </FullLayout>
    );
};

export default LandingPage;