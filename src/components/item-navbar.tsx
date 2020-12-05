import { Link } from 'gatsby';
import React from 'react';
import { ItemNavbarStyle } from '../styles/item-navbar-style';

type DataProps = {
   title: string;
   to: string;
   width?: string;
};

const ItemNavbar: React.FC<DataProps> = ({ title, to, width }) => {
   return (
      <ItemNavbarStyle>
         <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="52.4396"
                  y1="100.1121"
                  x2="247.4757"
                  y2="25.1088">
                  <stop offset="0" style={{ stopColor: '#007297' }} />
                  <stop offset="0.4133" style={{ stopColor: '#00A0AF' }} />
                  <stop offset="0.895" style={{ stopColor: '#1DCAD3' }} />
               </linearGradient>
            </defs>
            <rect
               // stroke="url(#gradient)"
               className="shape"
               height="32px"
               width={width ? `calc(${width} - 10px)` : '90%'}
               x="5"
               y="5"
               rx="5"
            />
            <foreignObject
               className="node"
               x="0"
               y="0"
               height="100%"
               width="100%"></foreignObject>
         </svg>
         <Link to={to}>
            <div className="text">
               <span>{title}</span>
            </div>
         </Link>
      </ItemNavbarStyle>
   );
};

export default ItemNavbar;
