import React from "react"
import Img from "gatsby-image"

export default function MobileTemplate({ data }) {
  console.log(data.allFile.nodes[0].childrenImageSharp[0].fluid)
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const [images] = data.allFile.nodes

  return (
    <>
    <div className=" wrap p-10 overflow-auto scrollbar bg-black">
      <h2 className=" text-3xl mt-10">{title}</h2>
      <br/>
      <br/>
      <br/>
      <Img className="p-10" fluid={data.allFile.nodes[0].childrenImageSharp[0].fluid}/>
      <br/>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className=" mt-10 flex flex-col gap-10 text-justify "
      ></div>
      <br/>
      <br/>

    {
      data.allFile.nodes.slice(1).map(image => <div><Img fluid={image.childrenImageSharp[0].fluid}/><br/><br/></div>)
    }
    </div>
     </>
  )
}
