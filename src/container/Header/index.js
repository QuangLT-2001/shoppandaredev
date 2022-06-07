import React, { useEffect, useState, useContext } from "react";
import Input from "./../../Component/input";
import {
  HeaderBottomWrapper,
  HeaderTopWrapper,
  HeaderWrapper,
} from "./style";
import _ from "lodash";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons"
import {
  headerTopBottoms,
  listMenu,
  listMenuFixed
} from "./data";
import HeaderTopBottomItem from "./Component/headerTopBottomItem";
import MenuItem from "./Component/MenuItem";
import {
  getListProductRequest
} from "./actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectColor
} from "./selector";
import SearchItem from "./Component/SearchItem";
import { removeVietKey } from "../../utils";
import Empty from "../Components/Empty";
import { useHistory } from "react-router-dom";
import {
  ThemeColor
} from "./../../Component/Theme"
import Buttons from "../../Component/Button";
import PropTypes from "prop-types";
const Header = (props) => {
  const [headerTopBottom, setHeaderTopBottom] = useState([]);
  const [menus, setMenus] = useState([]);
  const [status, setStatus] = useState(true);
  const [listMenuFixedBottom, setListMenuFixedBottom] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [statusSearch, setStatusSearch] = useState(false);
  const history = useHistory();
  const { stateColor } = useContext(ThemeColor);
  const body = document.querySelector("body")
  // xử lý mapStateToProps;
  const products = useSelector(selectProducts);
  const currentColor = useSelector(selectColor);
  // xử lý mapDispatchToProps;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProductRequest());
    setHeaderTopBottom(headerTopBottoms);
    setMenus(listMenu);
    setListMenuFixedBottom(listMenuFixed);
  }, []);
  const handleChangeStatus = () => {
    setStatus((state) => !state);
  };
  if (!products.length) return null;
  const handleChangeInput = event => {
    const { value } = event.target;
    setSearch(value);
    const removeMark = removeVietKey(value).toLowerCase();
    setKeyword(removeMark);

    const data = products.filter(item => removeVietKey(item.name).toLowerCase().includes(removeMark));
    setResultSearch(data);
  }
  let data = keyword ? resultSearch : products;
  let dataMobile = keyword ? resultSearch : products;
  const handleClickToDetail = (id) => {
    history.push(`/san-pham/${id}`);
    setKeyword("");
    setSearch("");
    setStatusSearch(false);
    body.classList.remove("hidden");
  }
  const handleCloseMenu = () => {
    setStatus(true);

  }
  const handleClickToLogin = () => {
    history.push("/dang-nhap")
    setStatus(true)
  }
  const handleClickToRegister = () => {
    history.push("/dang-ky");
    setStatus(true)
  }

  const handleClickChangeTrueStatusSearch = () => {
    setStatusSearch(true)
    setStatus(true);
    body.classList.add("hidden")

  }
  const handleChangeFalseStatusSearch = () => {
    setStatusSearch(false)
    body.classList.remove("hidden")
    setSearch("")
  }
  const handleClickToHome = () => {
    setStatusSearch(false);
    body.classList.remove("hidden");
    history.push("/")
    setSearch("")
  }
  return (
    <HeaderWrapper
      status={status}
      id="header" >
      <HeaderTopWrapper
        className="header-top"
        status={status}
        color={currentColor}
        statusSearch={statusSearch}
      >

        <div className="container">
          <Link className="icon-home" to="#" onClick={handleChangeStatus}>
            <span className="icon-home-item"></span>
          </Link>
          <h1 className="logo-website">
            <NavLink
              to="/"
              exact
              className="logo"
              onClick={handleCloseMenu}
            >
              <img src="/assets/images/logo/logo10.png" alt="shoppanda - Quảng Redev" />
            </NavLink>
          </h1>
          <div className="header-top-right">
            <div className="search" onClick={handleCloseMenu}>
              <Input
                type="text"
                className="input-search"
                placeholder="Tìm tên sản phẩm mà bạn mong muốn..."
                name="search"
                value={search}
                onChange={handleChangeInput}
                autocompelete="off"
              />
              {data = keyword ? <div className="search-element">
                {resultSearch.length ? data.map(item => {
                  return <SearchItem
                    searchItem={item}
                    key={item.id}
                    onClick={handleClickToDetail}
                  />
                }) : <Empty
                  onClick={handleClickToHome}
                />}
              </div> : null}
            </div>
            <div className="account-cart">
              <div className="account-container">
                <span
                  className="icon-search-mobile"
                  onClick={handleClickChangeTrueStatusSearch}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </span>

                {/* mobile */}

                <div className="search-mobile">
                  <div
                    className="mark"
                    onClick={handleChangeFalseStatusSearch}
                  ></div>
                  <div className="search-mobile-content">
                    <Input
                      type="text"
                      className="input-search"
                      placeholder="Bạn tìm gì hôm nay?"
                      name="search"
                      value={search}
                      onChange={handleChangeInput}
                      autocompelete="off"
                    />
                    {dataMobile = keyword ? <div className="search-element">
                      {resultSearch.length ? dataMobile.map(item => {
                        return <SearchItem
                          searchItem={item}
                          key={item.id}
                          onClick={handleClickToDetail}
                        />
                      }) : <Empty
                        history={history}
                        onClick={handleClickToHome}
                      />}
                    </div> : null}
                  </div>
                </div>


                {/* mobile */}

                <Link
                  to="/dang-nhap"
                  className="icon-link"
                  onClick={handleCloseMenu}
                >
                  <FontAwesomeIcon icon={faUser} />
                </Link>
                <NavLink
                  to="/dang-nhap"
                  exact
                  className="account-link"
                  onClick={handleCloseMenu}
                >
                  <span className="account-login-logout">
                    Đăng nhập / đăng ký
                  </span>
                  <span className="account">Tài khoản</span>
                </NavLink>
              </div>
              <NavLink
                to="/gio-hang"
                exact
                className="cart"
                onClick={handleCloseMenu}
              >
                <span className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="cart-text">Giỏ hàng</span>
              </NavLink>
            </div>



            <div className="header-top-bottom">

              <ul className="list-header-top-bottom">

                {headerTopBottom.map((item) => {
                  return (
                    <HeaderTopBottomItem
                      headerTopBottomItem={item}
                      key={item.id}
                      onClick={handleCloseMenu}
                    />
                  );
                })}
              </ul>
              <p className="phone">0392272154 | 0376326810

              </p>
            </div>

          </div>
        </div>
      </HeaderTopWrapper>
      <HeaderBottomWrapper
        status={status}
        className="header-bottom"
        color={currentColor}
      >
        <div className="container">
          <ul className="list-menu">
            <li className="account-mobile">
              <img src="/assets/images/Avatar/user1.png" alt="" />
              <div className="btn-register">
                <Buttons
                  name="Đăng Nhập"
                  type="login"
                  onClick={handleClickToLogin}
                />
                <Buttons
                  name="Đăng Ký"
                  type="register"
                  onClick={handleClickToRegister}
                />
              </div>
            </li>
            {menus.map((item) => {
              return <MenuItem
                menuItem={item}
                key={item.id}
                onClick={handleCloseMenu}
                color={currentColor}
              />;
            })}
          </ul>

        </div>
      </HeaderBottomWrapper>

      <div className="icon-home-mobile">
        <Link className="icon-home-mobile-item" to="#" onClick={handleChangeStatus}>
          <span className="icon-home-item"></span>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
