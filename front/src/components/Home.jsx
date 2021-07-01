import React,{useEffect} from "react";
import ProductBox from "./ProductBox";
import CarrouselBanner from "./CarrouselBanner";
import NavbarCategories from "./NavbarCategories";
import {useSelector, useDispatch} from "react-redux";
import { getComics } from "../store/comics";

const Home = () => {

  useEffect(()=>{
    dispatch(getComics());
  },[]);
    
  const comics = useSelector((state)=> state.comics);
  const dispatch = useDispatch();


    return (
        <>
        <div>
          <NavbarCategories />
        </div>

        <div>
          <CarrouselBanner />  
        </div>

        <div>
         
         <ProductBox comics = {comics}/>
        </div>
        </>
    )


}

export default Home