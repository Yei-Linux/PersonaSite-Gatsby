import React, { Fragment, useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ImageBanner } from "./styledComponent"

interface Props {
  imageName : string,
  children : React.ReactNode,
  width: string,
  height: string,
  margin: string
}

const DynamicImage = ({ imageName , children, width, height, margin }: Props) => {
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
    handleFilterFileName();
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
          imageState &&
          <ImageBanner height={height} width={width} margin={margin} fluid={imageState?.node.childImageSharp.fluid}>
            {children}
          </ImageBanner> 
        }
    </Fragment>
  );
}

export default DynamicImage
