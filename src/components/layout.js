/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import Navbar from "./navbar";



const Layout = ({ children }) => {
 

  return (
    <>
      <div className=" w-full h-screen flex bg-black text-white">
        <div className=" w-1/5"><Navbar/></div>
        <div className=" w-4/5 flex">{children}</div>
      </div>
    </>
  )
}

export default Layout
