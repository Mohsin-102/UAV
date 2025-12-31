import { NavItem } from "./NavItem"

export const Navbar = () => {

   const navObj = {'Home': [], 'UAV': ['UAV 2025'], 'About Us': ['About Us', 'Our achievements']}
    
  return (
    //full box
    <div className="bg-red-200 flex justify-end relative py-1 px-2"> 
      <div></div> {/* logo box */} 

      <div className="flex"> {/* main nav part */}
        <div className='flex'>
        {Object.keys(navObj).map(key=>(
            <NavItem navname={key} subNavArr={navObj[key]}/> )
            )}
             
        </div>

         
      </div> 
    </div>
  )
}
