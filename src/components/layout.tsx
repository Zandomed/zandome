/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {
   Component,
   Fragment,
   ReactNodeArray,
   useEffect,
   useState,
} from 'react';
import PropTypes, { ReactElementLike } from 'prop-types';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import {
   globalHistory,
   HistoryListenerParameter,
   HistoryLocation,
} from '@reach/router';

import Header from './header';

type DataProps = {
   children: string | number | boolean | {} | ReactElementLike | ReactNodeArray;
};

const Layout: React.FC<DataProps> = ({ children }) => {
   const [showLayout, setShowLayout] = useState(false);
   // console.log(window.location);

   useEffect(() => {
      _toggleShowLayout(globalHistory.location);
      return globalHistory.listen((history: HistoryListenerParameter) =>
         _toggleShowLayout(history.location),
      );
   });

   const _toggleShowLayout = (location: HistoryLocation): void => {
      setShowLayout(location.pathname !== '/');
   };

   const data = useStaticQuery(graphql`
      query SiteTitleQuery {
         site {
            siteMetadata {
               title
            }
         }
      }
   `);

   const _getView = () => {
      if (showLayout) {
         return (
            <Fragment>
               <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
               <div
                  style={{
                     margin: `0 auto`,
                     maxWidth: 960,
                     padding: `0 1.0875rem 1.45rem`,
                  }}>
                  <main>{children}</main>
                  <footer
                     style={{
                        marginTop: `2rem`,
                     }}>
                     © {new Date().getFullYear()}, Built with
                     {` `}
                     <a href="https://www.gatsbyjs.com">Gatsby</a>
                  </footer>
               </div>
            </Fragment>
         );
      } else {
         return <main>{children}</main>;
      }
   };

   return _getView();
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
