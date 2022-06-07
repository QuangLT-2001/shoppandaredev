import React from "react";
import { SearchItems } from "./style";
import { formatMoney } from "../../../../Component/Format";
import PropTypes from "prop-types";
const SearchItem = props => {
     const { searchItem, onClick } = props;
     const {
          avatar,
          name,
          price,
          discount,
          discountContent,
          id
     } = searchItem;

     return (
          <SearchItems className="search-item">
               <img
               src={avatar}
               alt=""
               onClick={() => onClick(id)} />
               <div className="info">
                    <h4
                    className="name-product"
                    onClick={() => onClick(id)}>
                         {name}
                    </h4>
                    <span className="price">
                         {`${formatMoney(price)} đ`}
                    </span>
                    {discount && <p className="discount">
                         <span className="discount-text">
                              {`${formatMoney(discount)}đ`}
                         </span>
                         <span className="discount-content">
                              {discountContent}%
                         </span>
                    </p>}

               </div>
          </SearchItems>
     );
}
SearchItem.propTypes = {
     searchItem: PropTypes.object,
     onClick: PropTypes.func
}
export default SearchItem;