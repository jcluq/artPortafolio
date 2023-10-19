import React from "react"
import Carrousel from "./carrousel/carrousel"

export default function DesktopTemplate({data}) {

  const {html} = data.markdownRemark
  const {title} = data.markdownRemark.frontmatter



  return (
    <>
      <div className=" w-full flex h max h-full">
        <div className=" w-5/12 wrap p-10 overflow-auto scrollbar border-l border-r border-black">
          <h2 className=" text-2xl mt-10">{title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className=" mt-10 flex flex-col gap-10 text-justify "
          ></div>
        </div>
        <div className=" w-7/12 wrap p-20 overflow-auto scrollbar">
          <Carrousel images={data.allFile.nodes} />
        </div>
      </div>
    </>
  )
}
