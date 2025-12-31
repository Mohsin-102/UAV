import { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; //icon for dropdown

export const NavItem = ({navname, subNavArr}) => {
    const [isOpen, setisOpen] = useState(false); //state for dropdown open/close

  return (
    <div className="bg-red-600 py-2 px-4 m-2"> {/* individual nav item box */}
        <div className="bg-red hover:backdrop-opacity-50" onMouseLeave={()=>setisOpen(false)}> {/* main heading */}
            <div onClick={()=>setisOpen(!isOpen)}>
                <span>{navname}</span>
                {subNavArr[0] && <KeyboardArrowDownIcon/>}
            </div>
        {/* sub Array */}
            {isOpen && (<div className="flex flex-col absolute">
                    {subNavArr[0] && subNavArr.map(value=>(
                        <div><span>{value}</span></div>
                    ))}
            </div>)}
        </div>
    </div>
  )
}
