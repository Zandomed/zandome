import React from 'react';
import { Link, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectPage: React.FC<PageProps<void>> = () => (
   <>
      <SEO title="Project" />
      <h1>Hi from the project page</h1>
      <p>Welcome to Projects</p>
      {/* <Link to="/">Go back to the homepage</Link>
      <Link to="/about">Go  to the About</Link> */}
   </>
);

export default ProjectPage;
