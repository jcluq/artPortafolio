import * as React from "react"
import Layout from "../components/layout"
import MobileMain from "../components/mobileMain"
import MediaQuery from "react-responsive"

const IndexPage = () => (
  <>
    <MediaQuery minWidth={1224}>
      <Layout>
        
          <div className=" w-5/12 h-full wrap p-10 overflow-auto scrollbar border-l border-r border-black items-center align-middle">
            <div className=" mt-10 flex flex-col gap-10 text-justify ">
              I am an artist and maker from Bogota, Colombia with a deep
              interest in installation, sculpture, physical computation and
              digital fabrication.<br></br>
              <br></br>I like to work with perceptually interesting
              technologies, objects and phenomena by figuring out ways to
              transform them into experiences and contraptions that can express
              what I consider special about the complexity of the world we live
              in. <br></br>
              <br></br>I also have experience doing introductory workshops,
              using strategies to teach about art, electronics, programming and
              digital fabrication in a horizontal way. I believe the sharing of
              knowledge is the basis for a better future.
            </div>
          </div>
        
      </Layout>
    </MediaQuery>
    <MediaQuery maxWidth={1223}>
      <Layout>
        <MobileMain></MobileMain>
      </Layout>
    </MediaQuery>
  </>
)

export default IndexPage
