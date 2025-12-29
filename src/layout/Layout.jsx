import { Navbar } from "../componants/Navbar"

export const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {/* all pages will support navbar */}
    <div>
            {children}
    </div>
    </>
  )
}
