import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Carrousel from "../components/carrousel/carrousel"
import Img from "gatsby-image"
import DesktopTemplate from "../components/desktopTemplate"
import MediaQuery from "react-responsive"
import MobileTemplate from "../components/mobileTemplate"

export default function ProjectDetails({ data }) {
  console.log(data)
  return (
    <>
      <MediaQuery minWidth={1224}>
        <Layout>
          <DesktopTemplate data={data} />
        </Layout>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <Layout>
          <MobileTemplate data={data}/>
        </Layout>
      </MediaQuery>
    </>
  )
}

export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        imagesPath
      }
      html
    }
    allFile(
      filter: { relativeDirectory: { eq: $slug }, extension: { ne: "md" } }
    ) {
      nodes {
        name
        childrenImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
