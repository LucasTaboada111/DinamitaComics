import React from "react";
import ProductBox from "./ProductBox";
import CarrouselBanner from "./CarrouselBanner";
import NavbarCategories from "./NavbarCategories";

const Home = () => {



    return (
      
        <>

        <div>
          <NavbarCategories />
        </div>

        <div>
          <CarrouselBanner />  
        </div>

        <div>
         
         <ProductBox />
        </div>
        </>
    )


}

export default Home