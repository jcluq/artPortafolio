import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

export default function MobileMain() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  return (
    <div className="flex flex-col p-4 h-full">
      <div>
        <h1 className=" text-xl">Juan Camilo Luque</h1>
        <h3>art + media + design</h3>
        <br></br>
        <h3 className=" text-xs text-justify">
          I am an artist and maker from Bogota, Colombia with a deep interest in
          installation, sculpture, physical computation and digital fabrication.<br></br><br></br>
          I like to work with perceptually interesting technologies, objects and
          phenomena by figuring out ways to transform them into experiences and
          contraptions that can express what I consider special about the
          complexity of the world we live in. <br></br><br></br>I also have experience doing
          introductory workshops, using strategies to teach about art,
          electronics, programming and digital fabrication in a horizontal way.
          I believe the sharing of knowledge is the basis for a better future.
        </h3>
      </div>
      <div className=" flex links h-2/6 justify-center items-left flex-col">
        {projects.map(project => (
          <Link to={"/" + project.frontmatter.slug} key={project.id}>
            - {project.frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
