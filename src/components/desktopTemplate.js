import React from "react"
import Carrousel from "./carrousel/carrousel"

export default function DesktopTemplate({data}) {

  const {html} = data.markdownRemark
  const {title} = data.markdownRemark.frontmatter
  const {year} = data.markdownRemark.frontmatter
  const {youtube_id} = data.markdownRemark.frontmatter

  return (
    <>
      <div className=" w-full flex h max h-full">
        <div className=" w-5/12 wrap p-10 overflow-auto scrollbar border-l border-r border-black">
          <h2 className=" text-2xl mt-10">{title}</h2>
          <h3 className=" text-l mt-2">{year}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className=" mt-10 flex flex-col gap-10 text-justify "
          ></div>
        </div>
        <div className=" w-7/12 wrap p-20 overflow-auto scrollbar">
          {youtube_id && (<div className="video w-full">
            <iframe 
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
            </iframe>
            <br></br>
            <br></br>
          </div>)}
          <Carrousel images={data.allFile.nodes} />
        </div>
      </div>
    </>
  )
}
