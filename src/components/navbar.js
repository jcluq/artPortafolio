import React from "react"
import githubIcon from "../images/githubIcon.png"

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
  const 

    
  return (
    <div className="flex flex-col p-4 h-full justify-between">
      <div>
      <Link to="/"><h1 className=" text-xl">Juan Camilo Luque</h1></Link>
        <h3>art + media + design</h3>
      </div>
      <div className=" flex links h-4/5 justify-center items-left flex-col">
        {projects.map(project => (
          <Link to={"/" + project.frontmatter.slug} key={project.frontmatter.order}>
            - {project.frontmatter.title}
          </Link>
          
        ))
          
        }
      </div>
      <div>
        <a href="https://github.com/jcluq" target="_blank">
          <img src={githubIcon}/>
        </a>
      </div>
      
    </div>
  )
}
