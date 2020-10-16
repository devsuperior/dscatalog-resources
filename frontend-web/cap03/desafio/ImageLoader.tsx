import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="23" rx="2" ry="2" width="284" height="284" /> 
    <rect x="23" y="319" rx="0" ry="0" width="155" height="48" />
  </ContentLoader>
)

export default ImageLoader