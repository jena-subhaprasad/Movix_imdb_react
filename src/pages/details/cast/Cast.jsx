import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
const Cast = ({castData,isLoading}) => {
    console.log(castData);
   
    const {url}=useSelector((state)=>state.home);

const shimmer = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
  return (
    <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!isLoading ? (
                    <div className="listItems">
                        {castData?.map((item)=>{
                            let imageurl=item.profile_path?
                                         url.profile + item.profile_path
                                         :avatar;
                            return(
                                <div className="listItem" key={item.id}>
                                    <div className="profileImg">
                                        <Img src={imageurl}/>
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="character">{item.character}</div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {shimmer()}
                        {shimmer()}
                        {shimmer()}
                        {shimmer()}
                        {shimmer()}
                        {shimmer()}
                    </div>
                )}
            </ContentWrapper>
        </div>
  )
}

export default Cast