import * as React from "react"
import Layout from "../components/layout"
import MobileMain from "../components/mobileMain"
import MediaQuery from "react-responsive"

const IndexPage = () => (
  <>
    <MediaQuery minWidth={1224}>
      <Layout></Layout>
    </MediaQuery>
    <MediaQuery maxWidth={1000}>
      <Layout>
        <MobileMain></MobileMain>
      </Layout>
    </MediaQuery>
  </>
)

export default IndexPage
