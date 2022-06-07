import styled, { keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 5px;
    background-image: url("/assets/images/logo/cong/white.png");
    background-position: center center;
    background-repeat: repeat;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .icon-home-mobile {
    width: 100%;
    background: #fff;
    display: none;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 5px;
      background-image: url(/assets/images/logo/cong/white.png);
      background-position: center center;
      background-repeat: repeat;
      z-index: 3;
    }
    @media (max-width: 420px) {
      display: flex;
      justify-content: flex-end;
      padding: 0.75rem;
    }
    .icon-home-mobile-item {
      align-items: center;
      width: 50px;
      height: 50px;
      overflow: hidden;
      display: none;
      z-index: 2;
      @media (max-width: 768px) {
        display: flex;
      }
      .icon-home-item {
        display: block;
        width: 50%;
        height: 3px;
        background-color: #000;
        border-radius: 3px;
        position: relative;
        transition: all 0.3s linear;
        transform: translateX(${(props) => (props.status ? "0" : "-50px")});
        &:after,
        &:before {
          width: 170%;
          height: 100%;
          border-radius: 5px;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #000;
          transition: all 0.3s linear;
        }
        &:after {
          transform: translate(
              ${(props) => (props.status ? "0, 15px" : "50px, 0px")}
            )
            ${(props) => !props.status && "rotate(-45deg)"};
        }
        &:before {
          transform: translate(
              ${(props) => (props.status ? "0, -15px" : "50px, 0px")}
            )
            ${(props) => !props.status && "rotate(45deg)"};
        }
      }
    }
  }
`;
export const HeaderTopWrapper = styled.div`
  width: 100%;
  padding: 1rem 0 0;
  background: ${(props) => props.color.name};
  @media (max-width: 420px) {
    padding: 0;
  }
  & > .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 992px) {
      align-items: center;

    }
    .icon-home {
      align-items: center;
      width: 50px;
      height: 50px;
      overflow: hidden;
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
      @media (max-width: 420px) {
        display: none;
      }
      .icon-home-item {
        display: block;
        width: 50%;
        height: 3px;
        background-color: #fff;
        border-radius: 3px;
        position: relative;
        transition: all 0.3s linear;
        transform: translateX(${(props) => (props.status ? "0" : "-50px")});
        &:after,
        &:before {
          width: 170%;
          height: 100%;
          border-radius: 5px;
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          background: #fff;
          transition: all 0.3s linear;
        }
        &:after {
          transform: translate(
              ${(props) => (props.status ? "0, 15px" : "50px, 0px")}
            )
            ${(props) => !props.status && "rotate(-45deg)"};
        }
        &:before {
          transform: translate(
              ${(props) => (props.status ? "0, -15px" : "50px, 0px")}
            )
            ${(props) => !props.status && "rotate(45deg)"};
        }
      }
    }
    .logo-website {
      width: 20%;
      margin-right: 1rem;
      display: inline-block;
      @media (max-width: 992px) {
        width: 25%;
        margin-right: 1rem;
      }
      @media (max-width: 768px) {
        width: 30%;
        margin-right: 1rem;
      }
      @media (max-width: 560px) {
        width: 35%;
        margin-right: 1rem;
      }
      @media (max-width: 460px) {
        width: 30%;
        margin-right: 1rem;
      }
      @media (max-width: 420px) {
        width: 35%;
      }
      & > .logo  img {
        width: 100%;
        min-height: 100px;
        object-fit: contain;
      }
    }
    .header-top-right {
      width: 85%;
      display: flex;
      flex-wrap: wrap;
      @media (max-width: 992px) {
        justify-content: space-between;
      }
      @media (max-width: 768px) {
        width: auto;
      }
      .search {
        position: relative;
        width: 50%;
        @media (max-width: 992px) {
          flex: 0.9;
        }
        @media (max-width: 768px) {
          display: none;
        }
        .input {
          width: 100%;
          position: relative;
          transition: all 0.3s ease-in-out;
          & > input {
            margin: 0;
            height: 100%;
            border: 2px solid #fff;
            padding-right: 3rem;
          }

          &:after {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            content: "\f002";
            font-family: Fontawesome;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 1rem;
            color: #000;
            background: #fff;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            cursor: pointer;
          }
        }
        .search-element {
          margin: 1rem 0;
          padding: 1.5rem;
          position: absolute;
          z-index: 9999;
          width: 100%;
          max-height: 70vh;
          overflow: auto;
          background: #fff;
          border-radius: 3px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          transition: all 0.3s ease-in-out;
        }
      }
      .account-cart {
        display: flex;
        & > .account-container {
          display: flex;
          align-items: center;
          margin-left: 1rem;
          .icon-search-mobile {
            width: 50px;
            height: 50px;
            display: none;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            @media (max-width: 768px) {
              display: flex;
            }
          }
          .icon-link > svg {
            cursor: pointer;
            font-size: 2rem;
            margin-right: 0.65rem;
            color: #fff;
            @media (max-width: 768px) {
              display: none;
            }
          }
          .account-link {
            color: #fff;
            font-size: 0.85rem;
            text-transform: uppercase;
            display: flex;
            flex-direction: column;
            @media (max-width: 992px) {
              display: none;
            }
            .account {
              text-transform: capitalize;
              &:after {
                content: "\f107";
                font-family: Fontawesome;
                margin-left: 0.25rem;
              }
            }
          }
          .search-mobile {
            & > .mark {
              position: absolute;
              top: 0;
              left: 0;
              z-index: 99;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.3);
              cursor: pointer;
            }
            padding: 1rem 0;
            position: fixed;
            top: 0;
            left: 0;
            display: none;
            width: 100%;
            height: 100vh;
            z-index: 100;
            justify-content: center;
            align-items: center;
            @media (max-width: 768px) {
              display: ${(props) => props.statusSearch && "block"};
            }
            .search-mobile-content {
              position: relative;
              z-index: 101;
              width: 60%;
              left: 50%;
              top: 25%;
              transform: translate(-50%, -25%);
              transition: .3s;
              @media (max-width: 568px) {
                width: 70%;
              }
              @media (max-width: 500px) {
                width: 80%;
              }
              @media (max-width: 420px) {
                width: 90%;
              }
              & > .input {
                flex: 1;
                position: relative;
                transition: all 0.3s ease-in-out;
                display: none;
                z-index: 101;


                @media (max-width: 768px) {
                  display: block;
                  /* width: 100%; */
                }
                & > input {
                  margin: 0;
                  border: 2px solid #ee4d2d;
                  padding-right: 5rem;
                }
                &:after {
                  position: absolute;
                  top: 0;
                  right: 0;
                  height: 100%;
                  content: "\f002";
                  font-family: Fontawesome;
                  display: -webkit-box;
                  display: -webkit-flex;
                  display: -ms-flexbox;
                  display: flex;
                  -webkit-align-items: center;
                  -webkit-box-align: center;
                  -ms-flex-align: center;
                  align-items: center;
                  -webkit-box-pack: end;
                  -webkit-justify-content: flex-end;
                  -ms-flex-pack: end;
                  justify-content: flex-end;
                  padding: 0 1.5rem;
                  color: #fff;
                  background: #ee4d2d;
                  border-top-right-radius: 3px;
                  border-bottom-right-radius: 3px;
                  cursor: pointer;
                }
              }
              & > .search-element {
                background: #fff;
                margin: 0;
                position: absolute;
                top: 100%;
                left: 0;
                z-index: 9;
                width: 100%;
                max-height: 60vh;
                overflow: auto;
                border-radius: 3px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                display: none;
                margin: 1rem 0;
                @media (max-width: 992px) {
                  display: block;
                }
              }
            }
          }
        }
        .cart {
          color: #fff;
          display: flex;
          align-items: center;
          margin: 0 1rem;

          & > .cart-icon {
            font-size: 2rem;
            margin: 0 0.25rem;
            position: relative;
          }
          & > .cart-text {
            @media (max-width: 992px) {
              display: none;
            }
          }
        }
      }

      .header-top-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 0;
        @media (max-width: 768px) {
          display: none;
        }
        .list-header-top-bottom {
          display: flex;
          margin: 0;
        }
        .phone {
          color: #fff;
          padding: 0.05rem 0.55rem;
          border-radius: 8rem;
          background: rgb(171 171 171 / 50%);
        }
      }
    }
  }
`;

export const HeaderBottomWrapper = styled.div`
  background: #fff;
  @media (max-width: 768px) {
    background: ${(props) => props.color.name};
  }
  .list-menu {
    display: flex;
    margin: 0;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 100%;
      left: 0;
      z-index:  1007;
      width: max-content;
      background: #fff;
      transition: all 0.3s linear;
      transform-origin: left center;
      transform: translateX(${(props) => (props.status ? "-130%" : "0")})
        rotate(${(props) => (props.status ? "90deg" : 0)});
      padding: 1rem !important;
      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 5px;
        background-image: url("/assets/images/logo/cong/white.png");
        background-position: center center;
        background-repeat: repeat;
      }
    }
    @media (max-width: 420px) {
      width: 100%;
      align-items: center;
    }
    & > .account-mobile {
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid #cacaca;
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
      & > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${(props) => props.color.name};
      }
      .btn-register {
        display: flex;
        margin: 1rem;
        justify-content: center;
        & > button {
          border-radius: 5px;
          @media (max-width: 350px) {
            margin: 0.75rem;
          }
        }
        @media (max-width: 350px) {
          flex-direction: column;
        }
      }
    }
  }
`;
export const MenuFixedBottomWrapper = styled.ul`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  background: #fff;
  margin: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  @media (max-width: 416px) {
    display: flex;
  }
  & > li {
    width: calc(100% / 3);
    & > .menu-link {
      font-size: 0.8rem;
    }
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
  position: relative;
  align-items: flex-start;
  & > .username {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    max-width: 50px;
    cursor: pointer;
    &:hover ~ .email {
      opacity: 1;
      visibility: visible;
    }
  }
  & > img {
    width: 50px;
    height: 50px;
    margin-right: 0.75rem;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
    &:hover ~ .email {
      opacity: 1;
      visibility: visible;
    }
  }
  & > .email {
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 9;
    margin-top: 3rem;
    display: block;
    padding: 0.25rem 1rem;
    background: #fff;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
    margin-bottom: -3rem;
    opacity: 0;
    visibility: hidden;
    &:after {
      position: absolute;
      top: -90%;
      left: 20%;
      content: "";
      border: 15px solid transparent;
      border-bottom-color: #fff;
    }
  }
`;
