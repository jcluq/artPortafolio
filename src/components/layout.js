/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Navbar from "./navbar"
import MediaQuery from "react-responsive"
import menuIcon from "../images/menuicon.png"
import { useState } from "react"
import MobileMain from "./mobileMain"

const Layout = ({ children }) => {
  const [menuToggle, setMenuToggle] = useState(false)

  return (
    <>
      <MediaQuery minWidth={1224}>
        <div className=" w-full h-screen flex bg-black text-white">
          <div className=" w-1/5">
            <Navbar />
          </div>
          <div className=" w-4/5 flex">{children}</div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <div className=" w-full h-screen flex bg-black text-white">
          <div className=" ">{children}</div>
        </div>
      </MediaQuery>
    </>
  )
}

export default Layout
