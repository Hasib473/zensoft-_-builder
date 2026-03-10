import React from 'react';
import ThemeProduct from '../Component/Themes/ThemeProduct';
import RatingSection from '../Component/Themes/RatingSection';
import ImageStack from '../Component/Themes/ImageStack';
import FeatureGrid from '../Component/Themes/FeatureGrid';
import Specifications from '../Component/Themes/Specifications';

const Themes = () => {
    return (
        <div>
            <div>
                <ThemeProduct/>
                </div>
                <div>
                    <RatingSection/>
                </div>
                <div>
                    <ImageStack/>
                </div>
                <div>
                    <FeatureGrid/>
                </div>
                <div>
                    <Specifications/>
                </div>
        </div>
    );
};

export default Themes;