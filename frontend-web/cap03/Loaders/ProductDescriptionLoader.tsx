import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductDescriptionLoader = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={180}
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="-3" y="40" rx="2" ry="2" width="353" height="24" />
    <rect x="0" y="0" rx="2" ry="2" width="386" height="24" />
    <rect x="0" y="80" rx="2" ry="2" width="295" height="24" />
    <rect x="0" y="120" rx="2" ry="2" width="243" height="24" />
    <rect x="0" y="160" rx="2" ry="2" width="163" height="24" />
  </ContentLoader>
)

export default ProductDescriptionLoader;