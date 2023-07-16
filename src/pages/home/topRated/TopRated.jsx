import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../customHooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
    const [popularSwitchEndpoint,setPopularSwitchEndpoint]=useState("movie");       //initial movie

    const{data,loading}=useFetch(`/${popularSwitchEndpoint}/top_rated`);

    const onSwitchChange=(tab)=>{//lifted the state
        if (tab === "Movies") {
            setPopularSwitchEndpoint("movie");
        } else {
            setPopularSwitchEndpoint("tv");
        }
    }

    
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchTab data={["Movies","Series"]} onSwitchChange={onSwitchChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={popularSwitchEndpoint}/>
    </div>
  )
}

export default TopRated