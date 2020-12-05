import React, { Fragment } from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { HomeStyle } from '../styles/home-style';
import ItemNavbar from '../components/item-navbar';

const IndexPage: React.FC<PageProps<void>> = () => (
   <Fragment>
      <SEO title="Home" />
      <HomeStyle>
         <div
            style={{
               maxWidth: `250px`,
               marginBottom: `1.45rem`,
               width: '250px',
            }}>
            <Image />
         </div>
      </HomeStyle>
   </Fragment>
);

export default IndexPage;
