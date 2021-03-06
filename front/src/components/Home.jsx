import React, { useEffect } from "react"
import ProductBox from "./ProductBox"
import CarrouselBanner from "./CarrouselBanner"
import NavbarCategories from "./NavbarCategories"

import { useSelector, useDispatch } from "react-redux"
import { getComics } from "../store/comics"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getComics())
  }, [dispatch])

  const comics = useSelector(state => state.comics)
  const comicSearched = useSelector(state => state.search)
  return (
    <>
      <div>
        <NavbarCategories />
      </div>

      <div>
        <CarrouselBanner />
      </div>
      <div>
        <ProductBox comics={comicSearched.length ? comicSearched : comics} />
      </div>
    </>
  )
}

export default Home
