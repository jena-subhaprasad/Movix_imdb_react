import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../customHooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
    const [switchEndpoint,setSwitchEndpoint]=useState("day");//initial day

    const{data,loading}=useFetch(`/trending/all/${switchEndpoint}`);
    const onSwitchChange=(tab)=>{
      console.log(tab)
        if (tab === "Week") {
          setSwitchEndpoint("week");
        } else {
          setSwitchEndpoint("day");
        }
    }

    
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTab data={["Day","Week"]} onSwitchChange={onSwitchChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending