import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ItemNavbar from './item-navbar';
type DataProps = {
   siteTitle: string;
};
const Header: React.FC<DataProps> = ({ siteTitle }) => (
   <header
      style={{
         background: `#cbcbcb`,
         marginBottom: `1.45rem`,
      }}>
      <div
         style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
         }}>
         <h1 style={{ margin: 0 }}>
            <Link
               to="/"
               style={{
                  color: `white`,
                  textDecoration: `none`,
               }}>
               {siteTitle}
            </Link>
         </h1>
         <div>
            <ItemNavbar title={'projects'} to={'/project'} />
            <ItemNavbar title={'about'} to={'/about'} />
         </div>
      </div>
   </header>
);

Header.propTypes = {
   siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
   siteTitle: ``,
};

export default Header;
