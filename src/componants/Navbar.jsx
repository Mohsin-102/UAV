

export const Navbar = () => {

   const navarray = ['Home', 'UAV', 'Contact Us']
    
  return (
    <div class='flex'>
        {navarray.map(value=>(
            <div>{value}</div> 
            ))}
             
       
    </div>
  )
}
