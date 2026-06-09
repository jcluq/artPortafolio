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
              Materials are tools, that we can use to shape and express the complexities that involve being alive. 
              My practice is based on the research of the manipulation of materials and mediums, as there is a question about the incidence of time on our present existant that I want to explore and share. 
              Time is what shapes us from dust, and what directs us back to it. 

              
              <br></br>
              <br></br>
              
              
              
              
              
          
              I am an artist and maker from Bogota, Colombia , currently based in Germany, with a deep
              interest in installation, sculpture, physical computation and
              digital fabrication.<br></br>

              
              
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
