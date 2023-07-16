import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../customHooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
 import Cast from "./cast/Cast";
import VideosSection from "./videoSection/VideosSection";
import Carousel from "../../components/carousel/Carousel"

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
const Details = () => {
 
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
    const {data:similarData,loading:IssimilarDataLoading}=useFetch(`/${mediaType}/${id}/similar`)
    const { data:recomendData, loading:isRecomendDataLoading} = useFetch(`/${mediaType}/${id}/recommendations`);
    const title=mediaType==="tv" ?"Similar TV Shows":"Similar Movies";
    // console.log(similarData);


    return (
      <div>
        <DetailsBanner trailer={data?.results?.[0]} crew={credits?.crew} />
        <Cast castData={credits?.cast} isloading={creditsLoading} />
        <VideosSection data={data} loading={loading} />
        <div className="carouselSection">
          <ContentWrapper>
            <span className="carouselTitle">{title}</span>
          </ContentWrapper>
          <Carousel
            data={similarData?.results}
            loading={IssimilarDataLoading}
            endpoint={mediaType}
          />
        </div>
        {!!recomendData?.results && (
          <div className="carouselSection">
            <ContentWrapper>
              <span className="carouselTitle">Recommendations</span>
            </ContentWrapper>
            <Carousel
              data={recomendData?.results}
              loading={isRecomendDataLoading}
              endpoint={mediaType}
            />
          </div>
        )}
      </div>
    );
};

export default Details;