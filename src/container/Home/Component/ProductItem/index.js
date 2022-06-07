import React, { memo, useEffect, useState } from 'react';
import { ProductItems } from './style';
import { formatMoney } from '../../../../Component/Format';
import PropTypes from "prop-types";
import MyImage from '../../../../Component/Image';
import _slice from "lodash/slice"
import ImageItem from './Components/ImageItem';
const ProductItem = props => {
    const {
        productItem,
        className,
        icon,
        type,
        typeHot,
        history,
        color
    } = props;
    const {
        name,
        price,
        avatar,
        discount,
        status,
        discountContent,
        id,
        brand,
        subImage
    } = productItem;

    const priceFormat = formatMoney(price)
    const discountFormat = formatMoney(discount);
    let [currentImage, setCurrentImage] = useState(0);
    if (!subImage.length) return null
    let selectCurrentImage = subImage[currentImage];
    if(!selectCurrentImage) return null
    const sliderImage = _slice(subImage, 0, 4)
    const body = document.querySelector("body")
    const handleClickToDetail = productId => {
        body.classList.remove("hidden")
        history.push(`/san-pham/${productId}`);


    }
    // xử lý dot
    const handleClickSelectDot = ind => {
        setCurrentImage(ind);
    }
    if (!productItem) return null
    return (
        <ProductItems
            color={color}
            discountFormat={discountFormat}
            type={type}
            typeHot={typeHot}
            discountContent={discountContent}
            discount={discount}
            className={className}
            src="/assets/images/logo/dis2.png" icon={icon}
            status={status}
        >
            <div className="product-item-content">
                {discountContent && <span className="icon-discount">

                </span>}
                {/* <img
                    onClick={() => handleClickToDetail(id)}
                    src={avatar}
                    alt={name}
                /> */}
                <MyImage
                    onClick={() => handleClickToDetail(id)}
                    image={selectCurrentImage.src}
                    name={name}
                    className="image-product"
                />

                <div className="title-product">
                    <h5 className='name-code'>
                        Mã SP:  <span>
                            {brand ? brand : "Không có"}
                        </span>
                    </h5>
                    <h4
                        className="name-product"
                        onClick={() => handleClickToDetail(id)}
                    >{name}</h4>
                </div>
                <span className="price">{priceFormat}</span>
                <ul className='dot-image'>
                    {sliderImage.map((item, index) => <ImageItem
                        className={selectCurrentImage.id === item.id && "active"}
                        key={item.id}
                        imageItem={item}
                        handleClickSelectDot={() => handleClickSelectDot(index)}
                    />)}
                </ul>
            </div>
        </ProductItems>
    );
}
ProductItem.propTypes = {
    item: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string,
    typeHot: PropTypes.string,
    history: PropTypes.object,
    color: PropTypes.object
}
export default memo(ProductItem);