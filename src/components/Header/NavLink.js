import { Link } from "react-router-dom"

const NavLink=({text, path, isActive})=>{
    return (
        <Link to={path} className={` hover:text-green-500 ${isActive ? 'text-green-400' : 'text-white'}`}>{text}</Link>
    )
}
export default NavLink