import { useLocation, useNavigate } from "react-router"
import { appRoutes } from "../../Constants"
import Button from "../Button"
import NavLink from "./NavLink"

const MainSection = () =>{
    const navigate = useNavigate()
    const location = useLocation()
  
    return(
        <div  className="container flex items-center justify-between w-full py-6">
           <img src="/Logo.svg" alt="Logo-app" />
           <div className="flex items-center gap-10">
           <nav className="flex items-center  gap-6">
           {appRoutes.map((route) => (
            <NavLink key={route.id} text={route.name} path={route.path} isActive={route.path === location.pathname}  />
           ))}
           </nav>
     <Button text="Contact Us" onClick={() => navigate('/contact-us')} />
           </div>
        </div>
    )
}
export default MainSection
