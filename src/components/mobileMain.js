import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { frontmatter: { order: ASC } }){
        nodes {
          id
          frontmatter {
            title
            slug
            order
            year
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  return (
    <div className="flex flex-col p-4 h-full">
      <div>
        <Link to="/"><h1 className=" text-xl">Juan Camilo Luque</h1></Link>
        <h3>art + media + design</h3>
        <br></br>
        <h3 className=" text-sm text-justify">
          Materials are tools, that we can use to shape and express the complexities that involve being alive. 
              My practice is based on the research of the manipulation of materials and mediums, as there is a question about the incidence of time on our present existant that I want to explore and share. 
              Time is what shapes us from dust, and what directs us back to it. 

              
              <br></br>
              <br></br>
              
              
              
              
              
          
              I am an artist and maker from Bogota, Colombia , currently based in Germany, with a deep
              interest in installation, sculpture, physical computation and
              digital fabrication.<br></br>
        </h3>
        
          
      </div>
        <br></br>
        <br></br>
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
