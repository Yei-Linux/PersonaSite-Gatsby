import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { GifBanner, ImageBanner } from "./styledComponent"

interface Props {
  imageName : string,
  children : React.ReactNode,
  width: string,
  height: string,
  margin: string,
  borderRadius : string,
  backgroundSize? : string,
  isGif? : boolean,
  gifPath? : any 
}

const DynamicImage = ({ imageName , children, width, height, margin, borderRadius, backgroundSize = "cover", isGif = false , gifPath = null}: Props) => {
  const [imageState,setImageState] = useState(null);
  const data = useStaticQuery(graphql`
    query {
      images:allFile {
        edges {
          node {
            relativePath,
            name,
            childImageSharp {
              fluid {
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `
  );

  useEffect(()=>{
    !isGif && handleFilterFileName();
  },[data]);

  const handleFilterFileName : any = () => {
    const image = data.images.edges.find((node : any) => {
      return node.node.relativePath.includes(imageName);
    });

    setImageState(image);
  }

  return(
    <Fragment>
        {
          isGif && 
          <GifBanner urlGif={gifPath} backgroundSize={backgroundSize} height={height} width={width} margin={margin} borderRadius={borderRadius}>
            {children}
          </GifBanner> 
        }
        { 
          !isGif && imageState &&
          <ImageBanner backgroundSize={backgroundSize} height={height} width={width} margin={margin} borderRadius={borderRadius} fluid={imageState?.node.childImageSharp.fluid}>
            {children}
          </ImageBanner> 
        }
    </Fragment>
  );
}

export default DynamicImage
