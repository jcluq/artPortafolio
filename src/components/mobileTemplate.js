
import React from "react"




export default function MobileTemplate({data}) {

  const {html} = data.markdownRemark
  const {title} = data.markdownRemark.frontmatter


  return (
    <div>MobileTemplate</div>
  )
}
