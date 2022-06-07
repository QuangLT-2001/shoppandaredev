import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css"

const MyImage = ({image, name, onClick, className}) => {
     return(
          <LazyLoadImage
          onClick={onClick}
          alt={name}
          src={image}
          effect="blur"
          delayTime="300"
          className={className}
          placeholderSrc={process.env.PUBLIC_URL + '/assets/images/logo/load.gif'}
          height="fit-content"
          />
     )
}
export default MyImage;