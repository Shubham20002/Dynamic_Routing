import {Outlet,Link} from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="nav">

        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/item'>item</Link>
        </div>
       
        <Outlet/>
        </>
    )
}

export default Navbar;