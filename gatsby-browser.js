/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require('react');
const { WrapWithProvider } = require('./src/wrap-with-provider');

exports.wrapRootElement = ({ element }) => (
   <WrapWithProvider children={element} />
);
