import React, { useEffect, useState, useContext, memo } from "react";
import {
     ChangeColorWrapper,
     ColorItems
} from "./style";
import { Colors } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faPalette,
     faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
     getColorRequest,
     putColorRequest
} from "./actions";
import { connect, useSelector, useDispatch } from "react-redux";
import {
     selectColor
} from "./selector";
import {
     ThemeColor
} from "./../../Component/Theme"
import PropTypes from "prop-types";

const ColorItem = ({
     colorItem,
     active,
     onClick
}) => {

     return (
          <ColorItems
               className={`color-item ${active && "active"}`}
               color={colorItem.name}
               onClick={onClick}
          >

          </ColorItems>
     );
}
const ChangeColor = () => {
     const [colors, setColors] = useState([]);
     const [status, setStatus] = useState(false);
     const [currentColor, setCurrentColor] = useState(0);
     const { stateColor, setStateColor } = useContext(ThemeColor);
     // xử lý mapStateToProps
     const color = useSelector(selectColor);
     // xử lý mapDispatchToProps;
     const dispatch = useDispatch();
     useEffect(() => {
          setColors(Colors);
          dispatch(getColorRequest());
     }, [currentColor])
     const handleChageColor = (index, item) => {
          setCurrentColor(index);
          dispatch(putColorRequest(item))
     }
     const body = document.querySelector("body");
     const handleClickChange = () => {
          setStatus(state => !state);
          body.classList.toggle("hidden");
     }
     const handleClose = () => {
          setStatus(false);
          body.classList.remove("hidden");
     }
     return (
          <ChangeColorWrapper
               className="setting-color"
               color={color.name}
               status={status}
          >
               <span
                    className="icon-color"
                    onClick={handleClickChange}
               >
                    <FontAwesomeIcon icon={faPalette} />
               </span>
               <div className="color-content">
                    <span
                         className="icon-close"
                         onClick={handleClose}
                    >
                         <FontAwesomeIcon icon={faTimes} />
                    </span>
                    <h3 className="title">
                         Setting Color
                    </h3>
                    <ul className="list-color">
                         {colors.map((item, index) => {
                              return <ColorItem
                                   colorItem={item}
                                   key={item.id}
                                   active={color.name === item.name}
                                   onClick={() => handleChageColor(index, item)}
                              />
                         })}
                    </ul>
               </div>
          </ChangeColorWrapper>
     );
}

ColorItem.propTypes = {
     colorItem: PropTypes.object,
     active: PropTypes.bool,
     onClick: PropTypes.func
}

export default memo(ChangeColor);