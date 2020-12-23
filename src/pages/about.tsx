// If you don't want to use TypeScript you can delete this file!
import React, { Fragment } from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

type DataProps = {
   site: {
      buildTime: string;
   };
};

const AboutPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
   <Fragment>
      <SEO title="About" />
      <h3>Hi from the About page</h3>
      <p>Welcome to About</p>
   </Fragment>
);

export default AboutPage;

export const query = graphql`
   {
      site {
         buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      }
   }
`;
