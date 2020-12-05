import styled from 'styled-components';

export const ItemNavbarStyle = styled.div`
   flex-grow: 1;
   width: 112px;
   height: 40px;
   position: relative;

   .shape {
      stroke-dasharray: 40 230;
      stroke-dashoffset: -151;
      stroke-width: 2.5px;
      fill: transparent;
      border-radius: 20px;
      stroke: url(#gradient);
      transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
   }

   .text {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
         font-size: 14px;
         font-weight: 600;
         text-transform: uppercase;
         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
         // color: white;
         -webkit-transition: text-shadow 600ms ease;
         -moz-transition: text-shadow 600ms ease;
         -o-transition: text-shadow 600ms ease;
         transition: text-shadow 600ms ease;
         color: white;
         /* @include themify($themes) {
            color: themed('textColor');
         } */
      }
   }

   &:hover {
      .shape {
         stroke-width: 3px;
         stroke-dashoffset: 0;
         stroke-dasharray: 257;
      }
      .text {
         cursor: pointer;
      }
   }

   &.inverted {
      .shape {
         stroke: none;
         fill: url(#gradient);
      }

      .text > span {
         color: white;
      }

      &:hover {
         .text {
            > a {
               text-shadow: 0px 3px 15px #212121;
               // color: #212121 !important;
            }
         }
      }
   }

   &.active .shape {
      stroke-width: 3px;
      stroke-dashoffset: 0;
      stroke-dasharray: 260;
   }

   &:not(:last-child) {
      margin-right: 1em;
   }
`;
