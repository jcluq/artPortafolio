import Img from "gatsby-image"
import React from "react"



export default function Carrousel(props) {

  const images = props.images;

  console.log(images)

 
  return (
    <>
   
    {
      images.map(image => <div><Img fluid={image.childrenImageSharp[0].fluid}/><br/><br/></div>)


    }

      
    
    
    </>
  )
}
