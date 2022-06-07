import styled, {keyframes} from "styled-components";
const scale = keyframes`
     from {
          transform: scale(.8);
     }
     to {
          transform: scale(1);
     }
`


export const ChangeColorWrapper = styled.div`
     position: fixed;
     bottom: 0;
     left: 0;
     margin: 2rem;
     z-index: 107;
     transition: .3s;
     @media (max-width: 992px) {
          bottom: 20%;
     }
     & > .icon-color {
          color: ${props => props.color};
          font-size: 2.5rem;
          transition: .3s;
          cursor: pointer;
          & > svg {
               animation: ${scale} 1s infinite ease-in-out alternate-reverse;
          }
     }
     & > .color-content {
          position: absolute;
          bottom: 100%;
          left: 100%;
          width: 320px;
          transition: .3s;
          border-radius: 5px;
          margin: 1rem;
          transform: ${props => props.status ? "translate(0, 0)" : "translate(0, 200%)"};
          @media (max-width: 992px) {
               bottom: 0;
          }
          @media (max-width: 440px) {
               width: 240px;
          }
          @media (max-width: 340px) {
               width: 200px;
          }
          & > .icon-close {
               font-size: 1.5rem;
               text-align: center;
               background: #fff;
               width: 50px;
               height: 50px;
               display: flex;
               justify-content: center;
               align-items: center;
               margin: -10px auto;
               transition: .3s;
               border-radius: 50%;
               cursor: pointer;
          }
          .title {
               padding: 1rem;
               color: ${props => props.color};
               text-align: center;
               border-bottom: 1px solid #cacaca;
               font-weight: 500;
               transition: .3s;
               background: #fff;
               margin: 0;
               border-top-left-radius: 5px;
               border-top-right-radius: 5px;
          }
          .list-color {
               background: #fff;
               display: flex;
               flex-wrap: wrap;
               transition: .3s;
               max-height: 250px;
               overflow: auto;
               border-bottom-left-radius: 5px;
               border-bottom-right-radius: 5px;
               @media (max-width: 440px) {
                    justify-content: center;
               }
          }
     }
`
export  const ColorItems = styled.li`
     width: 50px;
     height: 50px;
     border-radius: 50%;
     background: ${props => props.color};
     margin: .35rem;
     transition: .3s;
     transform: scale(.8);
     cursor: pointer;
     &.active {
          transform: scale(1);
     }
`