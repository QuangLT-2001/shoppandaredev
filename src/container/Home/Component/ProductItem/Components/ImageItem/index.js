import React from "react";
import { ImageItemWrapper } from "./style";
import MyImage from "../../../../../../Component/Image";
const ImageItem = ({ imageItem, className, handleClickSelectDot }) => {
     return (
          <ImageItemWrapper
               className={`image-item ${className}`}
               onClick={handleClickSelectDot}
          >
               <img src={imageItem.src} alt={imageItem.src} />
          </ImageItemWrapper>
     );
}
export default ImageItem;