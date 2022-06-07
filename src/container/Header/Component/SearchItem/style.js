import styled from "styled-components";
export const SearchItems = styled.div`
     display: flex;
     align-items: flex-start;
     margin: 1rem 0;
     padding: 1rem;
     border-bottom: 1px solid #cacaca;
     @media (max-width: 992px) {
          flex-direction: column;
          margin: 0;
     }
     & > img {
          width: 20%;
          transform: scale(.9);
          transition: all .3s;
          margin: 0 .55rem;
          cursor: pointer;
          &:hover {
               transform: scale(1);
          }
          @media (max-width: 992px) {
          margin: 1rem 0;
          width: 30%;
     }
     @media (max-width: 340px) {
          margin: 1rem 0;
          width: 35%;
     }
     }
     & > .info {
          .name-product {
               font-size: 1.1rem;
               cursor: pointer;
          }
          .price {
               color: #ee4d2d;
               font-size: 1.2rem;
               font-weight: 550;
          }
          .discount {
               .discount-text {
                    color: #cacaca;
                    text-decoration: line-through;
                    margin-right: .75rem;
               }
          }
     }
`